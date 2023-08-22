import SSRProvider from "react-bootstrap/SSRProvider";
import Router from "next/router";
import Script from "next/script";
import Head from "next/head";
import NProgress from "nprogress";
import ScrollTopButton from "../components/ScrollTopButton";
import "../scss/theme.scss";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/custome.css";
// import Loader from '../components/Loader'
import { useState, useEffect } from "react";

const Finder = ({ Component, pageProps }) => {
  const [isLoading, setLoadingState] = useState(false);
  // Bind NProgress to Next Router events (Page loading animation)
  Router.events.on("routeChangeStart", () => {
    setLoadingState(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoadingState(false);
    console.log("_________________________CALING_________________");
  });
  Router.events.on("routeChangeError", () => {
    setLoadingState(true);
  });
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  useEffect(() => {
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      console.log("complete loaded");
    } else {
      console.log("Not completly loading");
    }
  }, []);

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Kodago | Directory &amp; Listings</title>
        {/* <meta name='description' content='' />
        <meta name='keywords' content='' /> */}
        <meta name="author" content="Dailmenow" />
        //{" "}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        //{" "}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          color="#5bbad5"
          href="/favicon/safari-pinned-tab.svg"
        />
        <meta name="msapplication-TileColor" content="#766df4" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Component {...pageProps} />

      <ScrollTopButton
        showOffset={600}
        duration={800}
        easing="easeInOutQuart"
        tooltip="Top"
      />
    </SSRProvider>
  );
};

export default Finder;
