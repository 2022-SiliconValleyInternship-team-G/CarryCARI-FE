import styled from "styled-components";

const ImgWrpper = styled.div`
    width: 20vmin;
    text-align: center;
    border-radius: 15px;
    font-size: 1.6vw;
`;

const StyledImgContainer = styled.div`
    width: 20vmin;
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

const EmotionBox = ({text, imgsrc, onClick, styling}) => {
    return (
        <ImgWrpper style={styling}>
            <StyledImgContainer>
                <Img alt={text} src={imgsrc} onClick={onClick} />
            </StyledImgContainer>
            {text}
        </ImgWrpper>
    );
};

export default EmotionBox;
