import { AlertProps, SnackbarCloseReason } from "@mui/material";
import React from "react";

export type SnackbarProps = AlertProps & {
  children: React.ReactNode;
  open: boolean;
  onCloseSnackbar?: (
    event: Event | React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => void;
};
