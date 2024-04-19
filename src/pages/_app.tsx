import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import RootLayout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  console.log("Cange page!!!");
  return (
    // <RootLayout>
      <Component {...pageProps} />
    // </RootLayout>
  );
}
