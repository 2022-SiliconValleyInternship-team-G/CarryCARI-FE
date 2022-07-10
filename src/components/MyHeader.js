import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import {ColorCode} from "../utils/palette";

const StyledHeader = styled.header`
    font-family: "IM Fell French Canon SC";
    font-size: 7vmin;

    text-align: left;

    width: 100%;
    height: 10vmin;
`;

const MyHeader = () => {
    return (
        <StyledHeader>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                CarryCARI
            </Link>
        </StyledHeader>
    );
};

export default MyHeader;
