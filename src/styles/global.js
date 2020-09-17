import { createGlobalStyle} from 'styled-components';

import Background from '../images/yingyangcats.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f2a07b;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: right top;

    -webkit-font-smoothing:  antialiased;
  }

  body, input, button {
    font: 16px 'Ubuntu', sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
