import {useLocation} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import DownloadImgContainer from "../components/DownloadImgContainer";
import ImgContainer from "../components/ImgContainer";

const Container = styled.div`
    height: 150vh;
    display: grid;
    grid-template-rows: 1fr 1fr 8fr;
    place-items: center center;
`;
const Title = styled.div`
    font-size: 7vmin;
    font-weight: bold;
`;

const ResultContainer = styled.div`
    width: 90vw;
    height: 130vh;

    display: grid;
    grid-template-columns: repeat(3, 1fr); //여기 수정할 것
    grid-template-rows: repeat(3, 1fr);
    place-items: center center;
`;

const Result = () => {
    const imgImg = useLocation();
    const imgAddress = {
        before: imgImg.state.before,
        after: imgImg.state.after,
    };

    const resultList = () => {
        const reList = [];
        for (let i = 0; i <= 3; i++) {
            reList.push(<DownloadImgContainer key={i} text="after" imgsrc={imgAddress.after[i]} />);
        }
        reList.push(<ImgContainer key={9} text="before" imgsrc={imgAddress.before} />);
        for (let i = 4; i <= 7; i++) {
            reList.push(<DownloadImgContainer key={i} text="after" imgsrc={imgAddress.after[i]} />);
        }

        return reList;
    };

    return (
        <Container>
            <MyHeader />
            <Title>Check your Caricature!</Title>
            <ResultContainer>{resultList()}</ResultContainer>
        </Container>
    );
};

export default Result;
