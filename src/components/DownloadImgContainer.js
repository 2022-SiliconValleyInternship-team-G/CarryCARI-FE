import {useEffect, useState} from "react";
import styled from "styled-components";
import ImgContainer from "../components/ImgContainer";
import SmallButton from "./SmallButton";

const DownloadWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 35vmin;
    justify-content: space-between;

    @media all and (max-width: 600px) and (orientation: portrait) {
        &:nth-child(5) {
            display: none;
        }
    }
`;

const DownloadImgContainer = ({text, imgsrc}) => {
    const [newSrc, setNewSrc] = useState();
    function getBase64FromImageUrl(url) {
        var img = new Image();

        img.setAttribute("crossOrigin", "anonymous");

        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            var dataURL = canvas.toDataURL("image/png");
            setNewSrc(dataURL);
        };

        img.src = url;
    }

    useEffect(() => {
        getBase64FromImageUrl(imgsrc);
    }, [imgsrc]);

    return (
        <DownloadWrapper>
            <ImgContainer text={text} imgsrc={imgsrc} width={"26vmin"} />
            <a download="caricature" href={newSrc}>
                <SmallButton text={"download"} width={"15vmin"} />
            </a>
        </DownloadWrapper>
    );
};

export default DownloadImgContainer;
