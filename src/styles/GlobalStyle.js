import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  * {
    outline: none;
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    background-color: transparent;
  }

  input {
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
`;
export default GlobalStyle;
