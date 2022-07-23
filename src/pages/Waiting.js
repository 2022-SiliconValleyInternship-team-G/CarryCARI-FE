import {useNavigate, useLocation} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import Game from "react-chrome-dino";
import SmallButton from "../components/SmallButton";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import EmailContainer from "../components/EmailContainer";

const Container = styled.div`
    height: 95vh;
    display: grid;
    grid-template-rows: 1fr 6fr 3fr;

    @media all and (max-width: 600px) and (orientation: portrait) {
        height: 95vh;
        display: grid;
        grid-template-rows: 1fr 9fr;
        place-items: start center;
    }
`;

const GameContainer = styled.div`
    @media all and (max-width: 600px) and (orientation: portrait) {
        display: none;
    }
`;
const GameHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

const SubTitle = styled.div`
    font-size: 2.7vmin;
    font-weight: bold;
    text-align: center;
    margin: 40px;
`;

const Title = styled.div`
    font-size: 4vmin;
    font-weight: bold;

    @media all and (max-width: 600px) and (orientation: portrait) {
        font-size: 7vmin;
        text-align: center;
        margin-bottom: 20px;
    }
`;

const Waiting = () => {
    const navigate = useNavigate();

    const userInfo = useLocation();
    const userFeature = {id: userInfo.state.id, emotion: userInfo.state.emotion};

    const [canMove, setCanMove] = useState(false);
    const [imgAddress, setImgAddress] = useState({
        before: "",
        after: "",
    });

    const goToResult = () => {
        console.log(imgAddress);
        navigate("/result", {state: imgAddress});
    };

    useInterval(
        () => {
            axios
                //.get(`http://127.0.0.1:8000/cari/result?id=2&emotion=0`)
                .get(`http://127.0.0.1:8000/cari/result?id=${userFeature.id}&emotion=${userFeature.emotion}`)
                .then((response) => {
                    console.log(response);
                    if (response.data.after_img !== "yet") {
                        //여기는 종료 조건 (api 수정후 고치기)
                        setImgAddress({
                            before: `http://127.0.0.1:8000${response.data.before_img}`,
                            after: `http://127.0.0.1:8000${response.data.after_img}`,
                        });
                        setCanMove(true);
                    } else {
                        //여기는 디버깅용
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert("사진을 가져오는데 실패했습니다.");
                });
        },
        imgAddress.after ? null : 5000
    );

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest function.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    return (
        <Container>
            <MyHeader />
            <GameContainer>
                <GameHeader>
                    <Title>
                        Play the Game
                        <br />
                        until the results come out
                    </Title>
                    {canMove ? <SmallButton text="result>>" onClick={goToResult} /> : null}
                </GameHeader>
                <Game />
                <SubTitle>Press the space bar to play the game</SubTitle>
            </GameContainer>
            <EmailContainer userFeature={userFeature} />
        </Container>
    );
};

export default Waiting;
