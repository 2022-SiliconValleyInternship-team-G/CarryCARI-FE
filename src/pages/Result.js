import {useLocation} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import DownloadImgContainer from "../components/DownloadImgContainer";

const Container = styled.div`
    height: 150vh;
    display: grid;
    grid-template-rows: 1fr 1fr 13fr;
    place-items: center center;

    @media all and (max-width: 600px) and (orientation: portrait) {
        height: 130vh;
        grid-template-rows: 1fr 1fr 11fr;
    }
`;
const Title = styled.div`
    font-size: 7vmin;
    font-weight: bold;
`;

const ResultContainer = styled.div`
    width: 90vw;
    height: 130vh;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    place-items: center center;

    @media all and (max-width: 600px) and (orientation: portrait) {
        height: 110vh;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
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
        reList.push(<DownloadImgContainer key={9} text="before" imgsrc={imgAddress.before} />);
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
