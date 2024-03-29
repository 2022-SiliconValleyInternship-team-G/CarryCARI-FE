import styled from "styled-components";
import {ColorCode} from "../utils/palette";

const StyledButton = styled.button`
    font-family: "Poppins";
    font-size: 2.3vmin;

    border: none;
    border-radius: 15px;

    background: ${ColorCode.BLUE};
    color: ${ColorCode.WHITE};
    opacity: 80%;
    width: 8vw;
    min-width: 90px;

    cursor: pointer;
    transition: all 0.9s, color 0.3s;

    &:hover {
        background: ${ColorCode.WHITE};
        color: ${ColorCode.BLUE};
        opacity: 100%;
    }
`;

const SmallButton = ({text, onClick, width}) => {
    return (
        <StyledButton onClick={onClick} style={{width: width}}>
            {text}
        </StyledButton>
    );
};

export default SmallButton;
