import { createTheme, Theme } from "@mui/material/styles";
import { EThemeMode } from "../interfaces";

export type TConfigureThemeParams = {
  mode?: EThemeMode;
};
const configureTheme: (options?: TConfigureThemeParams) => Theme = (
  options
) => {
  const { mode = "light" } = options || {};
  // configured using https://material.io/resources/color
  const colorStore =
    mode === "light"
      ? {
          primary: {
            light: "#5f3fb3",
            main: "#291482",
            dark: "#000054",
          },
          secondary: {
            light: "#71ffff",
            main: "#00fff8",
            dark: "#00cbc5",
          },
        }
      : {
          primary: {
            light: "#3c2782",
            main: "#000054",
            dark: "#00002c",
          },
          secondary: {
            light: "#63fff8",
            main: "#00cbc5",
            dark: "#009995",
          },
        };
  return createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 1,
        },
      },
    },
    palette: {
      ...colorStore,
      mode,
    },
  });
};

export default configureTheme;
