import type { AppProps /*, AppContext */ } from "next/app";
import "../css/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
