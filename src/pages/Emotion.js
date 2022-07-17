import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import {ColorCode} from "../utils/palette";
import {EmotionNames} from "../utils/emotionNames";
import EmotionBox from "../components/EmotionBox";

const Container = styled.div`
    height: 95vh;
    display: grid;
    grid-template-rows: 1fr 3fr 4.5fr 1.5fr;
    place-items: center center;
`;

const Title = styled.div`
    font-size: 6.8vmin;
    font-weight: bold;
    line-height: 8vmin;
    place-self: center start;
`;

const EmotionContainer = styled.div`
    width: 90vw;
    height: 30vh;

    background: ${ColorCode.WHITE};
    opacity: 0.8;
    border-radius: 30px;
    box-shadow: 2px 3px gray;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center center;
`;

const Emotion = () => {
    const navigate = useNavigate();
    const [emotion, setEmotion] = useState(0);

    const userInfo = useLocation();
    const [userFeature, setUserFeature] = useState({
        id: userInfo.state.id,
        emotion: userInfo.state.emotion, //emotion은 필요 없음
    });

    const goToWaiting = () => {
        console.log(emotion);
        navigate("/waiting", {
            state: {
                id: userFeature.id,
                emotion: emotion,
            },
        });
    };

    const chooseEmotion = (em) => {
        setEmotion(em);
    };

    return (
        <Container>
            <MyHeader />
            <Title>
                Choose
                <br />
                the emotions
                <br />
                of the caricature!
            </Title>
            <EmotionContainer>
                <EmotionBox
                    text="smile"
                    imgsrc={require("../assets/smile.png")}
                    onClick={() => {
                        chooseEmotion(1);
                    }}
                    styling={{
                        background: `${EmotionNames[emotion] === "smile" ? `${ColorCode.GRAY}` : "none"}`,
                    }}
                />
                <EmotionBox
                    text="cry"
                    imgsrc={require("../assets/cry.png")}
                    onClick={() => {
                        chooseEmotion(2);
                    }}
                    styling={{
                        background: `${EmotionNames[emotion] === "cry" ? `${ColorCode.GRAY}` : "none"}`,
                    }}
                />
                <EmotionBox
                    text="surprised"
                    imgsrc={require("../assets/surprised.png")}
                    onClick={() => {
                        chooseEmotion(3);
                    }}
                    styling={{
                        background: `${EmotionNames[emotion] === "surprised" ? `${ColorCode.GRAY}` : "none"}`,
                    }}
                />
                <EmotionBox
                    text="angry"
                    imgsrc={require("../assets/angry.png")}
                    onClick={() => {
                        chooseEmotion(4);
                    }}
                    styling={{
                        background: `${EmotionNames[emotion] === "angry" ? `${ColorCode.GRAY}` : "none"}`,
                    }}
                />
            </EmotionContainer>
            <CommonButton
                text={"next >>"}
                onClick={() => {
                    goToWaiting();
                }}
            />
        </Container>
    );
};

export default Emotion;
