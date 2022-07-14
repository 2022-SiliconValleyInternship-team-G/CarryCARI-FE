import {useNavigate, useLocation, useSearchParams} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import Game from "react-chrome-dino";
import SmallButton from "../components/SmallButton";
import {useEffect, useState, useRef} from "react";
import axios from "axios";

const Container = styled.div`
    height: 95vh;
    display: grid;
    grid-template-rows: 1fr 6fr 3fr;
`;

const GameContainer = styled.div``;
const GameHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;
const EmailContainer1 = styled.div``;
const EmailContainer2 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center center;
`;
const Title = styled.div`
    font-size: 4vmin;
    font-weight: bold;
`;

const InputLine = styled.input`
    font-family: "Roboto";
    border-radius: 5px;
    border: none;

    font-size: 2.5vmin;
    width: 40vw;
    margin-right: 10px;
`;

const Waiting = () => {
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();
    // const feature_id = searchParams.get("id");
    // const feature_emotion = searchParams.get("emotion");

    const userInfo = useLocation();
    const [userFeature, setUserFeature] = useState({
        id: userInfo.state.id,
        emotion: userInfo.state.emotion,
    });

    const [canMove, setCanMove] = useState(false);
    const [imgAddress, setImgAddress] = useState({
        before: "",
        after: "",
    });

    const emailPart = useRef();
    const [emailInput, setEmailInput] = useState("");
    const [emailSubmit, setEmailSubmit] = useState(false);

    const submitEmail = () => {
        {
            if (emailInput.indexOf("@") === -1) {
                alert("please check your email");
                emailPart.current.focus();
            } else {
                axios
                    .post("http://127.0.0.1:8000/cari/email/", {
                        user_id: userFeature.id,
                        user_email: emailInput,
                    })
                    .then((response) => {
                        console.log(response.data.submit_result);
                        if (response.data.submit_result === "success") {
                            setEmailSubmit(true);
                            setEmailInput("");
                        } else {
                            alert("Fail to submit Email");
                            setEmailInput("");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        alert("Fail to submit Email");
                        setEmailInput("");
                    });
            }
        }
    };

    const goToResult = () => {
        console.log(imgAddress);
        navigate("/result", {state: imgAddress});
    };

    const handleEmail = (e) => {
        setEmailInput(e.target.value);
    };

    const getData = () => {
        //따로 주기적으로 체크한 뒤에 그 다음에 넘어가기.
        axios
            .get(`http://127.0.0.1:8000/cari/result?id=2&emotion=0`)
            //.get(`http://127.0.0.1:8000/cari/result?id=${userFeature.id}&emotion=${userFeature.emotion}`)
            .then((response) => {
                console.log(response);
                setImgAddress({
                    before: response.data.before_img,
                    after: response.data.after_img,
                });
                setCanMove(true);
            })
            .catch((error) => {
                console.log(error);
                alert("사진을 가져오는데 실패했습니다.");
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
                <Game />
            </GameContainer>
            {emailSubmit ? (
                <EmailContainer2>
                    <Title>Your email has been submitted successfully.</Title>
                    <CommonButton
                        text={"go to the main"}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </EmailContainer2>
            ) : (
                <EmailContainer1>
                    <Title>
                        or Just enter your Email
                        <br />
                        We will send the result later
                    </Title>
                    <div>
                        <InputLine
                            placeholder="Enter your Email"
                            onChange={handleEmail}
                            type="email"
                            value={emailInput}
                            ref={emailPart}
                        />
                        <SmallButton text="submit" onClick={submitEmail} />
                    </div>
                </EmailContainer1>
            )}
        </Container>
    );
};

export default Waiting;
