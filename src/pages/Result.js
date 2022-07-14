import {useSearchParams, useLocation} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import {ColorCode} from "../utils/palette";
import ImgContainer from "../components/ImgContainer";
import {useEffect, useState} from "react";
import axios from "axios";

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
    // const [searchParams, setSearchParams] = useSearchParams();
    // const feature_id = searchParams.get("id");
    // const feature_emotion = searchParams.get("emotion");
    ////////////
    const imgImg = useLocation();
    const [imgAddress, setImgAddress] = useState({
        before: imgImg.state.before,
        after: imgImg.state.after,
    });

    // const [imgAddress, setImgAddress] = useState({
    //     before: "",
    //     after: "",
    // });
    ///////////////
    // const getData = () => {
    //     axios
    //         .get(`http://127.0.0.1:8000/cari/result?id=${feature_id}&emotion=${feature_emotion}`)
    //         .then((response) => {
    //             console.log(response);
    //             // setImgAddress({
    //             //     before: response.data.before_img,
    //             //     after: response.data.after_img,
    //             // });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("사진을 가져오는데 실패했습니다.");
    //             });
    //         });
    // };

    // useEffect(() => {
    //     getData();
    // }, []);
    ///////////
    return (
        <Container>
            <MyHeader />
            <Title>Check your Caricature!</Title>
            <ResultContainer>
                <ImgContainer text="before" imgsrc={imgAddress.before} />
                <ImgContainer text="after" imgsrc={imgAddress.after} />
            </ResultContainer>
            <a download="caricature.jpeg" href={imgAddress.after}>
                <CommonButton text={"download"} />
            </a>
        </Container>
    );
};

export default Result;
