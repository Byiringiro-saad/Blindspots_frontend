import Head from "next/head";

import "../styles/globals.css";
import "@uiw/react-textarea-code-editor/dist.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coding Blindspots</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
