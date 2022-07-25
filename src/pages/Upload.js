import {useLocation, useNavigate} from "react-router-dom";
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
    const feature_case = useLocation().state.case;

    const [imgFile, setImgFile] = useState();
    const fileSetting = (newFile) => {
        setImgFile(newFile);
    };

    const sendUrl1 = () => {
        if (!imgFile) alert("사진을 업로드해주세요.");
        else {
            axios
                .post("http://127.0.0.1:8000/cari/image", imgFile)
                .then((response) => {
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
        }
    };

    const sendUrl2 = () => {
        if (!imgFile) alert("사진을 업로드해주세요.");
        else {
            axios
                .post("http://127.0.0.1:8000/cari/image", imgFile)
                .then((response) => {
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
        }
    };

    return (
        <Container>
            <MyHeader />
            <Title>Upload your photo</Title>
            <div>
                <MyDropzone fileSetting={fileSetting} />
            </div>
            {feature_case !== 2 ? (
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
