import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    setTimeout(() => {
      process.env.SC_DISABLE_SPEEDY = 'true';
      process.env.REACT_APP_SC_DISABLE_SPEEDY = 'true';
    }, 8000);
  }, [])

  return (
    <Component {...pageProps} />
  );
}
