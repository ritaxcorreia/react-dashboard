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
  }

  .heading {
    color: ${({ theme }) => theme.text};
  }

  .total {
    color: ${({ theme }) => theme.totalColor};
  }

  .overview-title {
    color: ${({ theme }) => theme.text};
  }

  .container {
    background-color: ${({ theme }) => theme.CardBg};
  }

  .mini-container {
    background-color: ${({ theme }) => theme.CardBg};
  }

  `;
