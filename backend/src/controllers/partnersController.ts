import { Request, Response } from "express";
import Partners from "../models/partners";
import FindNearby from "../services/FindNearby";

interface INearbyUsersQuery {
  lat: number; // latitude;
  lon: number; // longitude;
  range: number; // in km;
}

export const getNearbyPartners = async (
  req: Request<any, any, any, INearbyUsersQuery>,
  res: Response
) => {
  try {
    const { lat, lon, range } = req.query;
    const partnersInstance = new Partners();
    const partners = await partnersInstance.read();
    if (partners?.length && lat && lon && range) {
      const findNearby = new FindNearby();
      const nearbyPartners = findNearby.findNearbyPartners(
        partners,
        lat,
        lon,
        range
      );
      res.status(200).json({ data: nearbyPartners, success: true });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid request",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error on getting nearby partners",
    });
  }
};
