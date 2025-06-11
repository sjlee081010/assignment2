import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      @font-face {
          font-family: 'Logo';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/IAMAPLAYER.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
    `}
  />
);

export default GlobalStyle;
