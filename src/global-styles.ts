import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,100;1,200;1,300&family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&family=Roboto:ital,wght@0,300;1,300&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, #root, body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: var(--vh, 100vh);
        background-color: #1E222B;
        color:white;
        font-family: Poppins;
    }
`;

// export const theme = {
//     ligth: "rgba(255, 255, 255, 0.75)",
//     dark: "rgba(0, 0, 0, 0.75)",
// };
