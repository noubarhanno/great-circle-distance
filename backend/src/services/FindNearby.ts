import { IPartners } from "../models/partners";
import GreateCircleDistance from "./GreateCircleDistance";

class NearbyPartners extends GreateCircleDistance {
  /**
   *
   * @param users array of users locations coordinates
   * @returns array of users that are in range
   */
  public findNearbyPartners(
    users: Array<IPartners>,
    lat: number,
    lon: number,
    range: number
  ): Array<IPartners> {
    const nearbyUsers = [];
    for (const user of users) {
      for (const office of user.offices) {
        let offices = [];
        const [lat2, lon2] = office.coordinates.split(",").map(Number);
        const distance = this.calculateDistance(lat, lon, lat2, lon2);
        if (distance <= range) {
          offices.push(office);
          nearbyUsers.push({ ...user, offices });
        }
      }
    }
    return nearbyUsers;
  }
}

export default NearbyPartners;
