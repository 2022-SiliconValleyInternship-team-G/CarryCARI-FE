import {useNavigate, useLocation} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import SmallButton from "../components/SmallButton";
import {useEffect, useState} from "react";
import axios from "axios";
import EmailContainer from "../components/EmailContainer";
import {AddressLink} from "../utils/addressLink";
import CommonButton from "../components/CommonButton";

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
const ResultContainer = styled.div`
    display: none;
    @media all and (max-width: 600px) and (orientation: portrait) {
        display: block;
        width: 90%;
        text-align: center;
    }
`;

const IframeContrainer = styled.iframe`
    width: 90vw;
    height: 50%;
    border: none;
    margin-left: 5vw;
`;

const Waiting = () => {
    const navigate = useNavigate();

    const userInfo = useLocation();
    const userFeature = {id: userInfo.state.id, emotion: userInfo.state.emotion};

    const [canMove, setCanMove] = useState(false);
    const [imgAddress, setImgAddress] = useState({
        before: "",
        after: [],
    });

    const goToResult = () => {
        navigate("/result", {state: imgAddress});
    };

    const getData = () => {
        axios
            .get(`${AddressLink}/cari/result?id=${userFeature.id}&emotion=${userFeature.emotion}`)
            .then((response) => {
                let afterArr = Object.values(response.data).filter((elm) => elm !== response.data.before_img);
                afterArr = afterArr.map((elm) => {
                    return AddressLink + elm;
                });

                setImgAddress({
                    before: AddressLink + response.data.before_img,
                    after: afterArr,
                });

                setCanMove(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

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
                <IframeContrainer title="dino" src="https://dooli1971039.github.io/t-rex-runner/">
                    Chrome Dino Game
                </IframeContrainer>
                <SubTitle>Press the space bar to play the game</SubTitle>
            </GameContainer>
            {canMove ? (
                <ResultContainer>
                    <Title>Check your caricature!</Title>
                    <CommonButton text="result>>" onClick={goToResult} />
                </ResultContainer>
            ) : (
                <EmailContainer userFeature={userFeature} />
            )}
        </Container>
    );
};

export default Waiting;
