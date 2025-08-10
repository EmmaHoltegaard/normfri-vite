// Global styles for styled components

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    box-sizing: border-box;
    }

    :root {
    --purple: #7168D9;
    --darkPurple: #665BE1;
    --lightPurple: #B4AFF2;
    --white: #FFFFFF;
    --lightBlue: #CFEDEE;
    --pink: #EAD6F2;
    --transparentWhite: rgba(255, 255, 255, 0.2);
    --transparentPurple: rgba(180, 175, 242, 0.3);
    }


    body {
    margin: 0;
    font-family: "Archivo", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(150deg,#CFEDEE 20%,#EAD6F2 40%, #CFEDEE 60% );
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100%;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

`