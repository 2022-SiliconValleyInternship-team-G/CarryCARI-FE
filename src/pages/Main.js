import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";

const Container = styled.div`
    height: 190vh;
    display: grid;
    grid-template-rows: 1fr repeat(2, 9fr);
    text-align: center;

    @media all and (max-aspect-ratio: 1286/877) {
        height: 190vh;
        display: grid;
        grid-template-rows: 1fr repeat(2, 9fr);
        justify-content: center;
    }
`;

const MainDiv = styled.div`
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center center;

    @media all and (max-aspect-ratio: 1286/877) {
        height: 90vh;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

const SubDiv = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    place-items: center center;
    height: 75vh;

    @media all and (max-aspect-ratio: 1286/877) {
        display: grid;
        grid-template-rows: 2fr 1fr;
        align-items: start;
        height: 90vh;
    }
`;

const ImgDiv = styled.img`
    @media all and (max-aspect-ratio: 1286/877) {
        display: none;
    }
`;

const TextContainer = styled.div`
    @media all and (max-aspect-ratio: 1286/877) {
        place-self: center;
    }
`;

const Title = styled.div`
    font-size: 10vmin;
    font-weight: bold;
    line-height: 11vmin;
`;

const Content = styled.div`
    font-size: 2.8vmin;
`;

const Main = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <MyHeader />
            <MainDiv>
                <SubDiv>
                    <TextContainer>
                        <Title>Create your own Caricature</Title>
                        <Content>
                            Upload your picture, and make your own caricature.
                            <br />
                            Try out this function by clicking the button below!
                        </Content>
                    </TextContainer>

                    <CommonButton
                        text={"create"}
                        onClick={() => {
                            navigate("/upload?case=1");
                        }}
                    />
                </SubDiv>

                <ImgDiv
                    alt="func1_img"
                    src={require("../assets/img1.png")}
                    style={{width: "75vmin", paddingRight: "10px"}}
                />
            </MainDiv>
            <MainDiv>
                <ImgDiv alt="func2_img" src={require("../assets/img2.png")} style={{width: "75vmin"}} />
                <SubDiv style={{paddingRight: "10px"}}>
                    <TextContainer>
                        <Title style={{fontSize: "9vmin"}}>
                            Create your own caricature with the emotions of your choice!
                        </Title>
                        <Content style={{fontSize: "2.5vmin"}}>
                            By choosing a emotion of your choice, we can create a caricature that shows the selected
                            emotion. <br />
                            Try out this function by clicking the button below!
                        </Content>
                    </TextContainer>

                    <CommonButton
                        text={"create"}
                        onClick={() => {
                            navigate("/upload?case=2");
                        }}
                    />
                </SubDiv>
            </MainDiv>
        </Container>
    );
};

export default Main;
