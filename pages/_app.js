import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <Head>
        <title>Samyarth</title>
        <meta name="description" content="Created by Navgurukul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Samyarth.svg" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
        />
        <meta name="google-site-verification" content="nMvd9WByWn1x1P4EG-bjB0GK1SLWogj78tioeBspFcU" />
        <meta name="google-site-verification" content="yUlWIKMXV-7EHdd-BjKIi0qDe9yW-AHqYAPlI9J1GCo" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
