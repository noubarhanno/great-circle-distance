import { AppBar, Box } from "@mui/material";
import { useConfigContext } from "context/config.context";
import React from "react";
import { ThemeModeController } from "../themeModeController";
import CompanyLogo from "components/icons/companyLogo";

const Header: React.FC = () => {
  const {
    state: { themeMode },
  } = useConfigContext();
  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        backgroundColor:
          themeMode === "dark"
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
      }}
    >
      <CompanyLogo />
      <Box>
        <ThemeModeController />
      </Box>
    </AppBar>
  );
};

export default Header;
