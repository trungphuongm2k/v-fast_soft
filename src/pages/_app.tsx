import "../styles/globals.css";
import Header from "../layout/Header";
import type { AppProps } from "next/app";
import ScrollBtn from "../layout/ScrollBtn";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ScrollBtn />
    </>
  );
}

export default MyApp;
