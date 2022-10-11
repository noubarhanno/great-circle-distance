import React from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { SnackbarProps } from "./snackbar.interface";

const Snackbar: React.FC<SnackbarProps> = ({
  children,
  open,
  onCloseSnackbar,
  ...rest
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={4000}
      open={open}
      onClose={onCloseSnackbar}
    >
      <Alert {...rest} onClose={onCloseSnackbar as any}>
        {children}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
