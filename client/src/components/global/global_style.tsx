import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
    height: 100vh;
    width: 100vw;
  }

  h1{
    color: white;
  }

  h2{
    color: white;
  }

  p{
    color: white;
  }

  a{
    text-decoration: none;
    color: rgb(235, 87, 87);
  }
`;
