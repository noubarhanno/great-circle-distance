import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useConfigContext } from "context/config.context";
import React from "react";
import CustomGlobalStyles from "./globalStyles";
import configureTheme from "./theme";

const ThemeAppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { state } = useConfigContext();
  const theme = configureTheme({
    mode: state.themeMode,
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomGlobalStyles themeMode={state.themeMode} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeAppWrapper;
