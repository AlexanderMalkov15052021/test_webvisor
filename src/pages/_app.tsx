import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const observerOptions = {
      childList: true,
      attributes: true,
      subtree: true
    };

    const webvisorStyle = document.createElement("style");

    webvisorStyle.id = 'webvisorStyle';

    webvisorStyle.setAttribute('scoped', 'scoped');

    document && document.head.appendChild(webvisorStyle);

    const observer = new MutationObserver(() => {

      new Promise((resolve: (value: string) => void) => {

        const stylesString = Object.values(document.styleSheets)
          .map(object => Object.values(object.cssRules)
            .map(obj => obj.cssText)).flat().join('');

        resolve(stylesString);
      })
        .then(result => {
          const webvisorStyle = document.getElementById('webvisorStyle');

          if (webvisorStyle) {

            webvisorStyle.innerHTML !== result && (webvisorStyle.innerHTML = result);

          }

        })
        .catch(err => alert(`Ошибка добавления стилей: ${err}`));

    });

    observer.observe(document.body, observerOptions);

  }, []);

  return (
    <Component {...pageProps} />
  );
}
