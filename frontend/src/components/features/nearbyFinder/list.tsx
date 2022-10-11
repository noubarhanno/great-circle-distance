import LocationOn from "@mui/icons-material/LocationOn";
import {
  Box,
  Divider,
  Paper,
  Skeleton,
  Theme,
  Typography,
} from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";

export type TCoordinates = {
  location: string;
  address: string;
  coordinates: string;
};

export interface IPartners {
  id: number;
  urlName: string;
  organization: string;
  customerLocations: string;
  willWorkRemotely: boolean;
  website: string | null;
  services: string;
  offices: Array<TCoordinates>;
}

export interface IPartnersListProps {
  partners?: Array<IPartners>;
  isLoading?: boolean;
}

const NearbyFinderList: React.FC<IPartnersListProps> = ({
  partners,
  isLoading,
}) => {
  /**
   * @description - this is animation variant for framer-motion
   */
  const animationVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const listAnimationVariant = {
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

  useEffect(() => {
    if (!isLoading) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [isLoading]);

  if (isLoading) {
    <Box display="flex" flexDirection="column" gap={2}>
      <Skeleton height={100} variant="rectangular" />
    </Box>;
  }
  if (!partners || partners.length === 0) {
    return (
      <motion.div
        initial="hidden"
        variants={animationVariant}
        animate={animation}
        transition={{ duration: 1 }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography color="text.secondary">List is empty</Typography>
        </Paper>
      </motion.div>
    );
  }
  return (
    <Box>
      {partners.map((partner, index) => (
        <motion.div
          key={`${partner.id}`}
          initial="hidden"
          variants={listAnimationVariant}
          animate={animation}
          transition={{ duration: (index + 1) * 0.3 }}
        >
          <ListItem
            key={`${partner.id}-${partner.organization}`}
            companyName={partner.organization}
            officeAddress={partner.offices.map((item) => item.address)}
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default NearbyFinderList;

interface ListItemProps {
  companyName: string;
  officeAddress?: string[];
}
const ListItem: React.FC<ListItemProps> = ({ companyName, officeAddress }) => {
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", p: 2, my: 2 }}>
      <Box display="flex" alignItems="center" mb={1}>
        <DescriptionBlock label="Company name" title={companyName} />
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" gap={2} mt={1}>
        {officeAddress?.map((address, index) => (
          <Box display="flex" alignItems="center">
            <LocationOn color="primary" sx={{ mr: 1 }} />
            <DescriptionBlock
              key={address}
              label={`Address ${index + 1}`}
              title={address}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

const DescriptionBlock: React.FC<{ label: string; title: string }> = ({
  label,
  title,
}) => {
  return (
    <Typography
      color="text.secondary"
      sx={(theme: Theme) => ({
        "& span": {
          fontWeight: 500,
          color: theme.palette.text.primary,
        },
      })}
    >
      {label}
      {": "} <span>{title}</span>
    </Typography>
  );
};
