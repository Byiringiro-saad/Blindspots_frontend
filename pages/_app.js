import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import "react-placeholder/lib/reactPlaceholder.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coding Blindspots</title>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
