import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "arial", sans-serif;
        box-sizing: border-box;
        overflow: hidden;
    }
    html{
        font-size: 62.5%;
        overflow: hidden;

        @media(max-width: 700px){
            font-size: 50%;
        }
    }
    a{
        text-decoration:none;
        color: inherit;
    }
    h1{
        font-family: 'Raleway', sans-serif;
    }
    p{
        font-family: 'Roboto', sans-serif;
    }
    
`