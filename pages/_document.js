import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en" data-color-mode="light">
      <Head />
      <body>
        <ToastContainer />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
