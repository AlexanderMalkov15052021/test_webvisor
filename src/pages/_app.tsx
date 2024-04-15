import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {

  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => setState(false), 10000);
  }, [])

  return (
    <StyleSheetManager disableCSSOMInjection={state}>
      <Component {...pageProps} />
    </StyleSheetManager>
  );
}
