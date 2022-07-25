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
    return (
        <DownloadWrapper>
            <ImgContainer text={text} imgsrc={imgsrc} width={"26vmin"} />
            <a download="caricature" href={imgsrc}>
                <SmallButton text={"download"} width={"15vmin"} />
            </a>
        </DownloadWrapper>
    );
};

export default DownloadImgContainer;
