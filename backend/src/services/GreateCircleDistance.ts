import { IPartners } from "../models/partners";

class GreateCircleDistance {
  // add constructor here to initialize the class with different args

  /**
   * @description - https://en.wikipedia.org/wiki/Earth_radius
   */
  private readonly earthRadius: number = 6371;

  /**
   *
   * @param degrees degrees in number
   * @returns  true if degrees is valid
   */
  private isDegreesLatLonValid(degrees: number): boolean {
    return degrees >= -180 && degrees <= 180;
  }

  /**
   *
   * @param degrees degrees in number
   * @returns {number} degrees in radians
   */
  private calculateDegreesToRadians(degrees: number): number {
    if (!this.isDegreesLatLonValid(degrees)) {
      throw new Error("Invalid degrees");
    }
    return (degrees * Math.PI) / 180;
  }

  /**
   *
   * @param lat1 latitude of first point
   * @param lon1  longitude of first point
   * @param lat2  latitude of second point
   * @param lon2  longitude of second point
   * @returns {number} distance between two points in km
   * @description  the formula used is in: https://en.wikipedia.org/wiki/Great-circle_distance
   */
  public calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    // convert the degrees to radians
    const lat1Radians = this.calculateDegreesToRadians(lat1);
    const lat2Radians = this.calculateDegreesToRadians(lat2);
    const lon1Radians = this.calculateDegreesToRadians(lon1);
    const lon2Radians = this.calculateDegreesToRadians(lon2);

    // harvesine formula
    // https://en.wikipedia.org/wiki/Haversine_formula
    const dLat = lat2Radians - lat1Radians;
    const dLon = lon2Radians - lon1Radians;
    const lat1Cos = Math.cos(lat1Radians);
    const lat2Cos = Math.cos(lat2Radians);
    // calculate hav(x) -- haversine of x - latitude
    const havLat = Math.pow(Math.sin(dLat / 2), 2);
    // calculate hav(y) -- haversine of y - longitude
    const havLon = Math.pow(Math.sin(dLon / 2), 2);
    const a = havLat + lat1Cos * lat2Cos * havLon;
    // calculate c -- great circle distance in radians - 2r * arcsin(sqrt(a))
    const c = 2 * Math.asin(Math.sqrt(a));
    const d = this.earthRadius * c; // Distance in km
    return d;
  }
}

export default GreateCircleDistance;
