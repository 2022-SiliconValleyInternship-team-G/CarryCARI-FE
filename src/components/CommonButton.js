import styled from "styled-components";
import {ColorCode} from "../utils/palette";

const StyledButton = styled.button`
    font-family: "Poppins";
    font-size: 3vh;
    font-weight: bold;

    border: 0.3vh solid ${ColorCode.BLUE2};
    border-radius: 15px;

    background: ${ColorCode.WHITE};
    color: ${ColorCode.BLUE};

    width: 30vw;
    height: 6vh;

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
