import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {

    // Z-INDEX
    ChatWindow: 20;
    ChatButton: 5;
    Menu: 10;

    // TYPOGRAPHY
    --font-title: "Open Sans", sans-serif, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue";
    --font-text: "Open Sans", sans-serif, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue";
  
    // COLOR PALETTE
    --cl-primary: #312360;
    --cl-secondary: #46a3cc;
    --cl-tertiary: #01dfd0;
    --cl-font: #393939;
    --cl-fontA: #ebebeb;
    --cl-fontB: #747474;
    --cl-fontW: #c9c9c9;
    --cl-fontLink: #575757;
    --cl-fontX: rgba(230, 230, 230, 0.445);
    --cl-white: #ffffff;
    --cl-black: #000;
    --cl-bg: #13102d;

    --cl-pulse1: rgba(50, 35, 97, 0.561);
    --cl-pulse2: rgba(165, 55, 255, 0.062);
    --cl-pulse3: rgba(190, 50, 255, 0.021);
  
    --cl-form: #cccccc;
  
    --cl-primaryGd: rgba(49, 35, 96, 0.836);
    --cl-bgGd: rgba(19, 16, 45, 0.925);
  
    --cl-shadow: rgba(0, 0, 0, 0.336);
  
    --cl-scroll-bg: #fff;
    --cl-scroll-shadow: rgba(0, 0, 0, 0.486);
  }
  
  // Z INDEXES:
  
  // UNIVERSAL
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  // BASE
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  
    @media only screen and (max-width: 48em) {
      font-size: 56.25%;
    }
  
    @media only screen and (max-width: 26.563em) {
      font-size: 50%;
    }
  }
  
  body {
    font-family: var(--font-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--cl-font);
    scroll-behavior: smooth;
  
    // scroll setup
    &::-webkit-scrollbar {
      width: 0.8rem;
      background-color: var(--cl-scroll-bg);
    }
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(
        to bottom,
        var(--cl-primary),
        var(--cl-secondary)
      );
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
      box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  // SELECTION
  ::selection {
    // background-color: var(--cl-primary);
    background-color: var(--cl-primary);
    color: var(--cl-white);
  }
  
  /* REMOVE SAFARI ZOOM */
  select,
  textarea,
  input[type="text"],
  input[type="password"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="date"],
  input[type="month"],
  input[type="time"],
  input[type="week"],
  input[type="number"],
  input[type="email"],
  input[type="url"],
  input[type="search"],
  input[type="tel"],
  input[type="color"] {
    font-size: 16px !important;
  }
  
  #root {
    // position: relative;
  }
  
  #menu {
    position: relative;
  }  
`;
