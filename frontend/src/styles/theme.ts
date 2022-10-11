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
            light: "#926be6",
            main: "#5f3fb3",
            dark: "#2a1482",
          },
          secondary: {
            light: "#aaffff",
            main: "#71ffff",
            dark: "#2dcbcc",
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
