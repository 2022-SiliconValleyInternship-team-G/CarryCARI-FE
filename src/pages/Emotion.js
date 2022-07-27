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
    line-height: 10.5vmin;
    place-self: center start;

    @media all and (max-aspect-ratio: 1286/877) {
        place-self: center center;
        text-align: center;
    }
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

    @media all and (max-aspect-ratio: 1286/877) {
        height: 55vh;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        place-items: center center;
        margin-bottom: 15px;
    }
`;

const Emotion = () => {
    const navigate = useNavigate();
    const [emotion, setEmotion] = useState(0);

    const userInfo = useLocation();
    const userFeature = {id: userInfo.state.id, emotion: userInfo.state.emotion};

    const goToWaiting = () => {
        navigate("/waiting", {
            state: {
                id: userFeature.id,
                emotion: emotion,
            },
        });
    };

    const emotionList = (emotion) => {
        const emlist = [];
        for (let i = 1; i <= 4; i++) {
            emlist.push(
                <EmotionBox
                    key={i}
                    text={EmotionNames[i]}
                    imgsrc={require(`../assets/${EmotionNames[i]}.png`)}
                    onClick={() => {
                        setEmotion(i);
                    }}
                    styling={{
                        background: `${EmotionNames[emotion] === EmotionNames[i] ? `${ColorCode.GRAY}` : "none"}`,
                    }}
                />
            );
        }
        return emlist;
    };

    return (
        <Container>
            <MyHeader />
            <Title>
                Choose the emotions
                <br />
                of the caricature!
            </Title>
            <EmotionContainer>{emotionList(emotion)}</EmotionContainer>
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
