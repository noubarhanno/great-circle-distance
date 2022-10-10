import { Box, Typography } from "@mui/material";
import { Header } from "components/features/header";

import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Box component="main" p={2} bgcolor="background.default">
        <Typography variant="h1">This is the very begining text</Typography>
      </Box>
    </>
  );
};

export default App;
