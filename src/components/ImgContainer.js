import styled from "styled-components";
import {ColorCode} from "../utils/palette";

const ImgWrpper = styled.div`
    width: 45vmin;
    text-align: center;
    background: ${ColorCode.WHITE};
    border-radius: 15px;
`;

const StyledImgContainer = styled.div`
    width: 45vmin;
    position: relative;

    &::after {
        display: block;
        padding-bottom: 100%;
        content: "";
    }
`;

const Img = styled.img`
    position: absolute;
    top: 7%;
    left: 7%;
    width: 86%;
    height: 86%;
`;

const ImgContainer = ({text, imgsrc, width}) => {
    return (
        <ImgWrpper style={{width: width}}>
            <StyledImgContainer style={{width: width}}>
                <Img alt={text} src={imgsrc} />
            </StyledImgContainer>
            {text}
        </ImgWrpper>
    );
};

export default ImgContainer;
