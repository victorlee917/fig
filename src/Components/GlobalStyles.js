import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import font from "../Font/Eulyoo1945-Regular.ttf";
import font2 from "../Font/Eulyoo1945-SemiBold.ttf";

const globalStyles = createGlobalStyle`
${reset};

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}

@font-face {
    font-family: "mainfont";
    src: url(${font}) format('truetype');
}

@font-face {
    font-family: "mainfont2";
    src: url(${font2});
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

::selection {
   background: rgba(255, 255, 255, 1);
}


a{
    text-decoration:none;
    color:inherit
}

*{
    box-sizing:border-box;
}


button { 
    outline: none;
border: none;
}

input {
    border: none;
    outline: none;
}

textarea {
    border:none;
    outline:none;
    resize: none;
    &:focus {
        border:none;
        outline:none;
    }
}

html {
    cursor: none;
}

body{
    font-family: "mainfont";
    font-size: 12px;
    background-color:rgba(243,239,235,1.0);
    color: rgba(0, 0, 0, 1);
    overflow-x: hidden;

-ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
}

.dD{
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  -webkit-appearance: none;
    width: 0;
    height: 0;
}

/* ::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0);
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,);
} */
`;

export default globalStyles;
