import {useNavigate} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import {ColorCode} from "../utils/palette";
import ImgContainer from "../components/ImgContainer";
import {useCallback, useMemo, useEffect, useRef, useState} from "react";

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
    const [imgAddress, setImgAddress] = useState({
        before: "",
        after: "",
    });

    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos").then((res) => res.json());
        const before = `${res[0].url}.jpg`;
        const after = `${res[1].url}.jpg`;
        setImgAddress({before, after});
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <MyHeader />
            <Title>Check your Caricature!</Title>
            <ResultContainer>
                <ImgContainer text="before" imgsrc={imgAddress.before} />
                <ImgContainer text="after" imgsrc={imgAddress.after} />
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
