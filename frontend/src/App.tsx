import { Box } from "@mui/material";
import { Header } from "components/features/header";
import { NearbyFinder } from "components/features/nearbyFinder";
import { Error } from "components/ui/error";

import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Error />
      <Header />
      <Box component="main" p={2} bgcolor="background.default">
        <NearbyFinder />
      </Box>
    </>
  );
};

export default App;
