import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  /* devanagari */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbFqj2mc8WDm7Q.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbFqj2mT8WDm7Q.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbFqj2md8WA.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWKBXyXfDDVXbnArXyi0A.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWKBXyXfDDVXbnPrXyi0A.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWKBXyXfDDVXbnBrXw.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbEyjmmc8WDm7Q.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbEyjmmT8WDm7Q.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbEyjmmd8WA.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbEeiWmc8WDm7Q.woff2)
      format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
      U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbEeiWmT8WDm7Q.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mukta/v13/iJWHBXyXfDDVXbEeiWmd8WA.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 500;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/saira/v13/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
      format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 500;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/saira/v13/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 500;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/saira/v13/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 600;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/saira/v13/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
      format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 600;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/saira/v13/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 600;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/saira/v13/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: ${theme.font.text};
    font-size: ${theme.font.sizes.small};

    background: ${theme.colors.black_dark};
    color: ${theme.colors.gray_400};
  }
`}

  button, a {
    cursor: pointer;
  }
  `;

export default GlobalStyles;
