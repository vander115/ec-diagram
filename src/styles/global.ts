import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100vh;
  }
`;
