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

  .heading, .overview-title, .big-stat, .today-count {
    color: ${({ theme }) => theme.text};
  }

  .total, .social-handle, .followers-text, .title {
    color: ${({ theme }) => theme.smallTextColor};
  }

  .container, .mini-container {
    background-color: ${({ theme }) => theme.cardBg};
  }

  .mini-container:hover, .container:hover {
    background-color: ${({ theme }) => theme.cardHover};
  }
  `;
