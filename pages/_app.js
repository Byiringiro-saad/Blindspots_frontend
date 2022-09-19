import Head from "next/head";
import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import "@uiw/react-textarea-code-editor/dist.css";
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
      />
      <Script strategy="lazyOnload">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', '${process.env.GA_ID}');
             `}
      </Script>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
