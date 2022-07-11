import {useNavigate, useSearchParams} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";
import styled from "styled-components";
import MyDropzone from "../components/MyDropzone";
import React, {useRef, useState, useEffect} from "react";
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

    return (
        <Container>
            <MyHeader />
            <Title>Upload your photo</Title>
            <div>
                <MyDropzone />
            </div>
            {feature_case !== "2" ? (
                <CommonButton
                    text={"create caricature"}
                    onClick={() => {
                        navigate("/result");
                    }}
                />
            ) : (
                <CommonButton
                    text={"choose emotion"}
                    onClick={() => {
                        navigate("/emotion");
                    }}
                />
            )}
        </Container>
    );
};

export default Upload;
