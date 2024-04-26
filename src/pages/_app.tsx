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

    interface WebvisorStyle extends HTMLStyleElement {
      cssRulesNum: number;
    }

    const styleContainer = document.querySelectorAll("[data-styled]")[0] as HTMLStyleElement;

    const webvisorStyle = document.createElement("style") as WebvisorStyle;

    webvisorStyle.id = "webvisorStyle";

    document.head.appendChild(webvisorStyle);

    const observer = new MutationObserver(() => {

      if (webvisorStyle.cssRulesNum !== styleContainer.sheet!.cssRules.length) {

        new Promise((resolve: (value: string) => void) => {
          const stylesString = Object.values(styleContainer.sheet!.cssRules).map(obj => obj.cssText).join("");
          resolve(stylesString);
        })
          .then(result => {
            webvisorStyle.innerHTML = result;
            webvisorStyle.cssRulesNum = styleContainer.sheet!.cssRules.length;
          })
          .catch(err => console.error("Ошибка добавления стилей: " + err));
      }
    });

    observer.observe(document.body, observerOptions);

  }, []);

  return (
    <Component {...pageProps} />
  );
}
