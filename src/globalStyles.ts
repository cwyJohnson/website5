import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * 

  body {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    overflow-y: auto;
    background-color: #232831;
  }


  @keyframes Spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default GlobalStyle;