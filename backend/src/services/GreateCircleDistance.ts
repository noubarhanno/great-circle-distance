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
    const dLat = this.calculateDegreesToRadians(lat2 - lat1); // deg2rad below
    const dLon = this.calculateDegreesToRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.calculateDegreesToRadians(lat1)) *
        Math.cos(this.calculateDegreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = this.earthRadius * c; // Distance in km
    return d;
  }
}

export default GreateCircleDistance;
