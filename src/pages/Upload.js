import {useNavigate, useSearchParams} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import MyDropzone from "../components/MyDropzone";
import React, {useState} from "react";
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

const Upload = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [urlLink, setUrl] = useState();

    const newUrlSetting = (newUrl) => {
        setUrl(newUrl);
    };
    const feature_case = searchParams.get("case"); //1이면 바로 결과, 2면 감정선택

    const sendUrl1 = () => {
        //바로 결과 페이지로
        axios
            .post("http://127.0.0.1:8000/cari/image/", {
                user_url: urlLink,
            })
            .then((response) => {
                console.log(response.data[0].user_id); //오는 data보고 인자 수정하기
                navigate(`/result?id=${response.data[0].user_id}&emotion=0`);
            })
            .catch((error) => {
                console.log(error);
                alert("사진 업로드에 실패했습니다.");
            });
    };

    const sendUrl2 = () => {
        //감정 선택 페이지로
        axios
            .post("http://127.0.0.1:8000/cari/image/", {
                user_url: urlLink,
            })
            .then((response) => {
                console.log(response.data[0].user_id); //오는 data보고 인자 수정하기
                navigate(`/emotion?id=${response.data[0].user_id}`);
            })
            .catch((error) => {
                console.log(error);
                alert("사진 업로드에 실패했습니다.");
            });
    };

    return (
        <Container>
            <MyHeader />
            <Title>Upload your photo</Title>
            <div>
                <MyDropzone newUrl={newUrlSetting} />
            </div>
            {feature_case !== "2" ? (
                <CommonButton
                    text={"create caricature"}
                    onClick={() => {
                        sendUrl1();
                    }}
                />
            ) : (
                <CommonButton
                    text={"choose emotion"}
                    onClick={() => {
                        sendUrl2();
                    }}
                />
            )}
        </Container>
    );
};

export default Upload;
