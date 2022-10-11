import React from "react";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "./button.interface";
import { Button as MuiButton, CircularProgress } from "@mui/material";

const CustomButton = styled(MuiButton)({
  // your styles here
});

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
  return (
    <CustomButton {...rest} disabled={isLoading ? true : rest.disabled}>
      {isLoading ? (
        <CircularProgress
          sx={{ width: "25px !important", height: "25px !important" }}
          color={rest.color}
          variant="indeterminate"
        />
      ) : (
        children
      )}
    </CustomButton>
  );
};

export default Button;
