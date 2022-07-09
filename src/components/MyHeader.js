import styled from "styled-components";

const StyledHeader = styled.header`
    font-family: "IM Fell French Canon SC";
    font-size: 7vmin;

    text-align: left;

    width: 100%;
    height: 10vmin;
`;

const MyHeader = () => {
    return <StyledHeader>CarryCARI</StyledHeader>;
};

export default MyHeader;
