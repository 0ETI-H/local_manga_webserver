import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { useMediaQuery } from "@material-ui/core";

import "@fontsource/roboto";
import "@fontsource/ubuntu";

export const cache = createCache({ key: "css", prepend: true });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
    },
    typography: {
      h1: {
        fontFamily: "roboto",
        fontSize: 64,
      },
      h2: {
        fontFamily: "roboto",
      },
      h3: {
        fontFamily: "roboto",
      },
      h4: {
        fontFamily: "ubuntu",
      },
      h5: {
        fontFamily: "ubuntu",
      },
      h6: {
        fontFamily: "ubuntu",
      },
    },
    // Override defaults through this
    overrides: {
      MuiCardHeader: {
        title: {
          fontSize: 14,
        },
        subheader: {
          fontSize: 10,
        },
      },
      MuiCardMedia: {},
    },
  });

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Local Manga Webserver</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
