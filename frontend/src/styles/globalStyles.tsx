import React from "react";
import { GlobalStyles, Theme } from "@mui/material";
import { EThemeMode } from "interfaces";

const CustomGlobalStyles: React.FC<{ themeMode: EThemeMode }> = ({
  themeMode,
}) => {
  return (
    <GlobalStyles
      styles={(theme: Theme) => ({
        "*": {
          boxSizing: "border-box",
          margin: 0,
        },
        "& html, body, #__next": {
          margin: 0,
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "Roboto, sans-serif",
          fontSize: "14px",
          backgroundColor: theme.palette.background.default,
          "& .MuiButton-root": {
            textTransform: "none",
            padding: "6px 20px",
            boxShadow: "none",
            borderRadius: "5px",
            minHeight: "40px",
            "&:hover": {
              boxShadow: "none",
            },
          },
          "& .MuiPaper-elevation": {
            ...(themeMode === "light" && {
              boxShadow: "rgb(0 0 0 / 10%) 0px 0px 15px 0px",
            }),
          },
        },
      })}
    />
  );
};

export default CustomGlobalStyles;
