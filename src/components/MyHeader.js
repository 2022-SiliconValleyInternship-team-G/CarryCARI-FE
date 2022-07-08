import styled from "styled-components";

const StyledHeader = styled.header`
    font-family: "IM Fell French Canon SC";
    font-size: 7vh;

    text-align: left;

    width: 100vw;
    height: 10vh;
`;

const MyHeader = () => {
    return <StyledHeader>CarryCARI</StyledHeader>;
};

export default MyHeader;
