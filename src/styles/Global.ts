import { createGlobalStyle } from 'styled-components';
import { colors } from '../source/Data';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    z-index: 1;
  }

  #root {
    margin: 0 auto;
  }

  body.light-mode {
    background: ${colors.background};
    color: #000;
    transition: background 0.3s ease;
  }

  body.dark-mode {
    background: ${colors.first};
    color: ${colors.background};
    transition: background 0.3s ease;
  }

  button {
    float: right;
    width: 100%;
    margin-top: 20px;
    margin-right: 20px;
  }

  /* Prevent the blue background highlight when tapping toggle button */
  .noSelect {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;
