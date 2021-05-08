import { createMuiTheme, useMediaQuery } from "@material-ui/core";

import "@fontsource/roboto";
import "@fontsource/ubuntu";

const prefersDarkMode = true;
// useMediaQuery("(prefers-color-scheme: dark)");

export const theme = createMuiTheme({
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
