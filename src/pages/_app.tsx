import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StyleSheetManager as DisableCSSOMInjection, StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DisableCSSOMInjection disableCSSOMInjection>
      <StyleSheetManager disableCSSOMInjection={false}>
        <Component {...pageProps} />
      </StyleSheetManager>
    </DisableCSSOMInjection>
  );
}
