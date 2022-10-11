import { Box } from "@mui/material";
import { endpoints } from "config";
import { EConfigContextAction, useConfigContext } from "context/config.context";
import useNetwork from "hooks/useNetwork";
import React, { useState } from "react";
import { isFloat } from "utils/validators";
import NearbyFinderForm, { TNearbyFieldsName } from "./form";
import NearbyFinderList, { IPartners } from "./list";

const NearbyFinder: React.FC = () => {
  const { dispatch } = useConfigContext();
  const [partnersList, setPartnersList] = useState<IPartners[]>();
  const [meetingCoordinates, setMeetingCoordinates] = useState({
    lat: "51.5144636",
    lon: "-0.142571",
    range: "5",
  });

  const onChangeHandler = (name: TNearbyFieldsName, value: string) => {
    setMeetingCoordinates((oldState) => ({ ...oldState, [name]: value }));
  };

  const { networkRequest, isLoading } = useNetwork();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const invalidValues = Object.keys(meetingCoordinates).find(
      (key) =>
        !meetingCoordinates[key as TNearbyFieldsName] ||
        !isFloat(meetingCoordinates[key as TNearbyFieldsName])
    );
    if (invalidValues) {
      dispatch({
        type: EConfigContextAction.SET_ERROR,
        payload: "Invalid values",
      });
      return;
    }
    const { data, success } = await networkRequest({
      method: "GET",
      url: endpoints.GET_NEARBY_PARTNERS,
      data: meetingCoordinates,
    });
    console.log(data, "data");
    if (success) {
      setPartnersList(data);
    }
  };
  return (
    <Box maxWidth={500} m="auto" gap={2}>
      <NearbyFinderForm
        lat={meetingCoordinates.lat}
        lon={meetingCoordinates.lon}
        range={meetingCoordinates.range}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        isLoading={isLoading}
      />
      <NearbyFinderList isLoading={isLoading} partners={partnersList} />
    </Box>
  );
};

export default NearbyFinder;
