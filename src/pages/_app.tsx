import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle } from 'styled-components'

import { DropdownMenu } from '../blocks/MainMenu/MainMenu.styled';

const GlobalStyle = createGlobalStyle`
  .${DropdownMenu.styledComponentId} {
    ${DropdownMenu.componentStyle.rules}
  }
`

export default function App({ Component, pageProps }: AppProps) {
  console.log(DropdownMenu);
  return (
    <>

      <GlobalStyle />

      <Component {...pageProps} />

    </>
  );
}
