import React from "react";
import { Box } from "@mui/material";
import { ErrorProps } from "./error.interface";
import { EConfigContextAction, useConfigContext } from "context/config.context";
import { Snackbar } from "../snackbar";

const Error: React.FC<ErrorProps> = ({ children }) => {
  const {
    state: { error },
    dispatch,
  } = useConfigContext();

  const onCloseSnackbar = () => {
    dispatch({
      type: EConfigContextAction.CLEAR_ERROR,
      payload: "",
    });
  };

  return (
    <Box
      component="div"
      margin="auto"
      data-testid="error-component"
      // sx - use this to add styles directly to the component
    >
      {!!error && (
        <Snackbar
          open={!!error}
          onCloseSnackbar={onCloseSnackbar}
          severity="error"
          data-testid="snackbar-error"
        >
          {error}
        </Snackbar>
      )}
      {children}
    </Box>
  );
};

export default Error;
