import React, { useCallback } from "react";
import { IconButton } from "@mui/material";
import { ThemeModeControllerProps } from "./themeModeController.interface";
import { EConfigContextAction, useConfigContext } from "context/config.context";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

const ThemeModeController: React.FC<ThemeModeControllerProps> = () => {
  const { dispatch, state } = useConfigContext();

  const changeSwitchThemeHandler = useCallback(() => {
    dispatch({
      type: EConfigContextAction.SET_THEME_MODE,
      payload: state.themeMode === "dark" ? "light" : "dark",
    });
  }, [state, dispatch]);

  return (
    <IconButton onClick={changeSwitchThemeHandler}>
      {state.themeMode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeModeController;
