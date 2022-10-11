import { Box, Paper, TextField, Typography } from "@mui/material";
import { Button } from "components/ui/button";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export type TNearbyFieldsName = "lat" | "lon" | "range";
export interface NearbyFinderProps {
  lat: string;
  lon: string;
  range: string;
  onChange: (name: TNearbyFieldsName, value: string) => void;
  onSubmit: (event: React.FormEvent) => void;
  isLoading?: boolean;
}
const NearbyFinderForm: React.FC<NearbyFinderProps> = ({
  lat = "",
  lon = "",
  range = "",
  onChange,
  onSubmit,
  isLoading,
}) => {
  /**
   * @description - this is animation variant for framer-motion
   */
  const animationVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  /**
   * @description - this is animation control for framer-motion
   */
  const animation = useAnimation();

  /**
   * start animating at the render time
   */
  useEffect(() => {
    animation.start("visible");
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name as TNearbyFieldsName, value);
  };

  return (
    <motion.div
      initial="hidden"
      variants={animationVariant}
      animate={animation}
      transition={{ duration: 1 }}
    >
      <Paper
        component="form"
        onSubmit={onSubmit}
        sx={{
          p: 2,
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          mb={2}
          variant="h6"
          textAlign="center"
          color="text.secondary"
        >
          Enter the meeting location
        </Typography>
        <Box display="flex" gap={1} mb={2}>
          <TextField
            label="Meeting Latitude"
            size="medium"
            name="lat"
            value={`${lat}`}
            onChange={onChangeHandler}
            fullWidth
          />
          <TextField
            label="Meeting Longtude"
            size="medium"
            name="lon"
            value={`${lon}`}
            onChange={onChangeHandler}
            fullWidth
          />
        </Box>
        <TextField
          label="Range"
          name="range"
          InputProps={{ endAdornment: "KM" }}
          value={`${range}`}
          onChange={onChangeHandler}
        />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          type="submit"
          isLoading={isLoading}
          data-testid="submit-button"
        >
          Get nearby partners
        </Button>
      </Paper>
    </motion.div>
  );
};

export default NearbyFinderForm;
