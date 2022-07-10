import {useNavigate} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import {ColorCode} from "../utils/palette";
import ImgContainer from "../components/ImgContainer";

const Container = styled.div`
    height: 95vh;
    display: grid;
    grid-template-rows: 1fr 1fr 7fr 1fr;
    place-items: center center;
`;
const Title = styled.div`
    font-size: 7vmin;
    font-weight: bold;
`;

const ResultContainer = styled.div`
    width: 90vw;
    height: 60vh;
    // background: ${ColorCode.BLUE};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center center;
`;

const Result = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <MyHeader />
            <Title>Check your Caricature!</Title>
            <ResultContainer>
                <ImgContainer text="before" imgsrc="../assets/img1.png" />
                <ImgContainer text="after" imgsrc="../assets/img2.png" />
            </ResultContainer>
            <CommonButton
                text={"download"}
                onClick={() => {
                    navigate("/");
                }}
            />
        </Container>
    );
};

export default Result;
