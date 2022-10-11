import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";

export type ButtonProps = MuiButtonProps & {
  children?: React.ReactNode;
  isLoading?: boolean;
};
