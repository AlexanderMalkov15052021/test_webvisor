import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [webvisorStyle, setWebvisorStyle] = useState('');

  useEffect(() => {
    const observerOptions = {
      childList: true,
      attributes: true,
      subtree: true
    };

    const observer = new MutationObserver(() => {

      new Promise((resolve: (value: string) => void) => {
        const stylesString = Object.values(document.styleSheets)
          .map(object => Object.values(object.cssRules)
            .map(obj => obj.cssText)).flat().join('');

        resolve(stylesString);
      })
        .then(result => {
          setWebvisorStyle(result);
        })
        .catch(err => alert(`Ошибка добавления стилей: ${err}`));

    });

    observer.observe(document.body, observerOptions);

  }, []);

  return (
    <>
      <Head>
        <style id={'webvisorStyles'}>{webvisorStyle}</style>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
