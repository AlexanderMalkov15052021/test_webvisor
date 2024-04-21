import { getWebvisorStylesStr } from "@/helpers/getWebvisorStylesStr";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${getWebvisorStylesStr()}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
