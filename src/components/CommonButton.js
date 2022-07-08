import styled from "styled-components";
import {ColorCode} from "../utils/palette";

const StyledButton = styled.button`
    font-family: "Poppins";
    font-size: 3vh;
    font-weight: bold;

    border: none;
    border-radius: 15px;

    background: ${ColorCode.WHITE};
    color: ${ColorCode.BLUE};

    width: 30vw;
    height: 6vh;

    cursor: pointer;
`;

const CommonButton = ({text, onClick}) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default CommonButton;
