import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  :root {
    --white: #fff;
    --black: #000;
    --dark-900: #101026;
    --dark-700: #1d1d2e;
    --green-900: #3fffa3;
    --red-900: #ff3f4b;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: var(--dark-700);
  }
`;

export default GlobalStyle;
