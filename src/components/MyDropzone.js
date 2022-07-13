import React, {useState, useEffect, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import styled from "styled-components";
import {ColorCode} from "../utils/palette";
import ImgContainer from "./ImgContainer";
import {AiOutlineDownload} from "react-icons/ai";

//전체 컨테이너
const Container = styled.div`
    border-radius: 15px;
`;

const ResetButton = styled.button`
    position: absolute;
    top: 50vmin;
    left: 16.5vmin;

    width: 12vmin;
    height: 4vmin;

    border: none;
    border-radius: 10px;

    background: ${ColorCode.PINK};
    color: ${ColorCode.WHITE};
`;
const Wrapper = styled.div`
    opacity: 0.5;
    border: 3px dashed black;
    border-radius: 15px;
    background: ${ColorCode.WHITE};
    width: 45vmin;
    position: relative;

    &::after {
        display: block;
        padding-bottom: 100%;
        content: "";
    }
`;

const ImgDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

function MyDropzone({newUrl}) {
    const [imgName, setImgName] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    const deleteImg = () => {
        setImgName("");
        setImgSrc("");
        newUrl(imgSrc); //Upload.js로 url이 넘어가게
    };

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                // Do whatever you want with the file contents
                setImgSrc(reader.result);
                setImgName(file.name);
                newUrl(imgSrc);
            };
            reader.readAsDataURL(file);
        });
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    useEffect(() => {
        newUrl(imgSrc);
    }, [imgSrc]);

    return (
        <Container>
            {imgSrc ? (
                <div style={{position: "relative"}}>
                    <ImgContainer text={imgName} imgsrc={imgSrc} />
                    <ResetButton onClick={deleteImg}>reset</ResetButton>
                </div>
            ) : (
                <div {...getRootProps()}>
                    <Wrapper>
                        <ImgDiv>
                            <input {...getInputProps()} />
                            <AiOutlineDownload
                                size="15vmin"
                                style={{position: "absolute", top: "10vmin", left: "15vmin"}}
                            />
                            {isDragActive ? (
                                <p
                                    style={{
                                        position: "absolute",
                                        top: "25vmin",
                                        width: "45vmin",
                                        textAlign: "center",
                                    }}
                                >
                                    Drop the files here ...
                                </p>
                            ) : (
                                <p style={{position: "absolute", top: "25vmin", width: "45vmin", textAlign: "center"}}>
                                    Choose a file, or drag it here.
                                </p>
                            )}
                        </ImgDiv>
                    </Wrapper>
                </div>
            )}
        </Container>
    );
}
export default MyDropzone;
