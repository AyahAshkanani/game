import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;
export const grid = styled.div`
display: flex;
flex-wrap: wrap;
height: 300px;
width: 400px;
`;