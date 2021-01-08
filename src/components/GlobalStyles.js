import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Inter", sans-serif;
    transition: all 0.50s linear;
  }

  body::before {
    background: ${({ theme }) => theme.bodyAlt};
    color: ${({ theme }) => theme.text};
  }

  `;
