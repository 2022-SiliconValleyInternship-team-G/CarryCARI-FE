import {useNavigate, useSearchParams} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import MyDropzone from "../components/MyDropzone";
import React, {useState, useEffect} from "react";
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
    const feature_case = searchParams.get("case"); //1이면 바로 결과, 2면 감정선택

    const [imgFile, setImgFile] = useState();
    const fileSetting = (newFile) => {
        setImgFile(newFile);
    };

    const sendUrl1 = () => {
        //바로 결과 페이지로
        console.log(imgFile.get("image"));
        axios
            .post("http://127.0.0.1:8000/cari/image", imgFile)
            .then((response) => {
                console.log(response);
                console.log(response.data.user_id);
                //navigate(`/result?id=${response.data.user_id}&emotion=0`);
                navigate("/waiting", {
                    state: {
                        id: response.data.user_id,
                        emotion: 0,
                    },
                });
            })
            .catch((error) => {
                console.log(error);
                alert("사진 업로드에 실패했습니다.");
            });
    };

    const sendUrl2 = () => {
        //감정 선택 페이지로
        axios
            .post("http://127.0.0.1:8000/cari/image", imgFile)
            .then((response) => {
                console.log(response.data.user_id);
                //navigate(`/emotion?id=${response.data.user_id}`);
                navigate("/emotion", {
                    state: {
                        id: response.data.user_id,
                        emotion: 1,
                    },
                });
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
                <MyDropzone fileSetting={fileSetting} />
            </div>
            {feature_case !== "2" ? (
                <CommonButton
                    text={"create caricature"}
                    onClick={() => {
                        //console.log(imgFile.get("image"));
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
