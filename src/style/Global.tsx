import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(images/layout-bg.png);
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  @font-face {
    font-family: hero;
    src: url(/fonts/hero.ttf);
   }

  .hero-font {
    font-family: hero, fantasy;
  }

  .text-shadow {
    text-shadow: 2px 2px 3px #000;
  }

  ol {
    list-style: number;
    list-style-position: outside;
    padding-left: 20px;
  }

  .span-1 {
    grid-column: span 1;
  }

  .span-2 {
    grid-column: span 2;
  }

  .span-3 {
    grid-column: span 3;
  }

  .span-4 {
    grid-column: span 4;
  }

  .span-5 {
    grid-column: span 5;
  }

  .span-6 {
    grid-column: span 6;
  }

  .span-7 {
    grid-column: span 7;
  }

  .span-8 {
    grid-column: span 8;
  }

  .span-9 {
    grid-column: span 9;
  }

  .span-10 {
    grid-column: span 10;
  }

  .span-11 {
    grid-column: span 11;
  }

  .span-12 {
    grid-column: span 12;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mr-20 {
    margin-right: 20px;
  }

  .d-flex {
    display: flex !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .text-center {
    text-align: center !important;
  }

  .font-weight-normal {
    font-weight: 400;
  }
`

export default GlobalStyle
