import styled from "styled-components";
import {ColorCode} from "../utils/palette";

const StyledButton = styled.button`
    font-family: "Poppins";
    font-size: 3vmin;
    font-weight: bold;

    border: 0.3vmin solid ${ColorCode.BLUE2};
    border-radius: 15px;

    background: ${ColorCode.WHITE};
    color: ${ColorCode.BLUE};

    width: 75%;
    height: 8vh;

    cursor: pointer;
    transition: all 0.9s, color 0.3s;

    &:hover {
        background: ${ColorCode.BLUE2};
        color: ${ColorCode.WHITE};
    }
`;

const CommonButton = ({text, onClick}) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default CommonButton;
