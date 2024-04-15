import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {

  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => setState(true), 8000);
  }, [])

  return (
    state
      ? <StyleSheetManager disableCSSOMInjection>
        <Component {...pageProps} />
      </StyleSheetManager>
      : <Component {...pageProps} />
  );
}
