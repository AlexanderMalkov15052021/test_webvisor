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

    interface webvisorStyle extends HTMLStyleElement {
      currentCSSRules: string[];
    }
    

    const styleContainer = document.querySelectorAll('[data-styled]')[0] as HTMLStyleElement;

    const webvisorStyle = document.createElement("style") as webvisorStyle;

    webvisorStyle.id = 'webvisorStyle';

    webvisorStyle.setAttribute('scoped', 'scoped');

    document && document.head.appendChild(webvisorStyle);


    const observer = new MutationObserver(() => {

      new Promise((resolve: (value: string[]) => void) => {

        const stylesString = Object.values(styleContainer.sheet!.cssRules).map(obj => obj.cssText);

        resolve(stylesString);

      })
        .then(result => {

          if (webvisorStyle.currentCSSRules?.length !== result.length) {

            webvisorStyle.currentCSSRules = result;

            webvisorStyle.innerHTML = '';

            const applyStyles = (styleRules: string[]) => {
              styleRules.forEach(function (style, index) {
                setTimeout(function () {
                  webvisorStyle.innerHTML += style;
                }, index)
              })
            }

            applyStyles(webvisorStyle.currentCSSRules);

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
