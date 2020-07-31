import { createGlobalStyle } from 'styled-components';
import themes from 'themes';

const { device, palette } = themes;

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    -moz-box-sizing: inherit;
    -webkit-box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 50%;

    @media ${device.md} {
      font-size: 62.5%;
    }
  }

  body {
    background-color: ${palette.white.default};
    min-height: 100vh;
    font-size: 1.8rem;
    font-family: Roboto;

    * {
      color: ${palette.black.default};
    }
  }
`;

export default GlobalStyle;
