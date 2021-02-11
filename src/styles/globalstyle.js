import { createGlobalStyle } from "styled-components"
import "@fontsource/hind/300.css"
import "@fontsource/hind/400.css"
import "@fontsource/hind/700.css"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    margin: 0;  
    background-color: ${(props) => props.theme.color.lightGrey};
  }
  body {
    font-family : "Hind", sans-serif;
    font-size: 16px;
    line-height : 1.8em;
    color       : black;
    font-weight : 300;
    background  : #111111;
    margin      : 0;
    overflow-y: scroll;
  }
  p {
    margin: 0 0 20px;
    text-align: justify;
  }

  h1 {
    font-weight: 700;
  }
  h2 {
    font-size: 1.2rem;
    line-height: 1.8em;
    font-weight: 700;
    margin: 0 0 10px;
    color: ${(props) => props.theme.color.black};
  }
  h3 {
    font-size: 0.9rem;
    line-height: 1.8em;
    font-weight: 700;
    margin: 0 0 10px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
  }

  a {
    color              : ${(props) => props.theme.color.primary};
    text-decoration    : none;
    transition         : all 0.3s ease 0s;
    }
  a,
  a:active,
  a:focus,
  a:active {
    text-decoration : none;
    outline         : none
  }
  a:hover,
  a:focus {
    text-decoration : underline;
  }
`