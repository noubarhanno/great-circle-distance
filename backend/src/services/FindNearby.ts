import { IPartners } from "../models/partners";
import GreateCircleDistance from "./GreateCircleDistance";

class NearbyPartners extends GreateCircleDistance {
  /**
   *
   * @param partners array of partners
   * @returns  array of partners sorted by organization
   */
  private sortPartnersByName = (
    partners: Array<IPartners>,
    sort: "asc" | "desc"
  ): Array<IPartners> => {
    let sortedArray = [];
    if (sort === "asc") {
      sortedArray = partners.sort((a, b) => {
        if (a.organization < b.organization) {
          return -1;
        }
        if (a.organization > b.organization) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedArray = partners.sort((a, b) => {
        if (a.organization > b.organization) {
          return -1;
        }
        if (a.organization < b.organization) {
          return 1;
        }
        return 0;
      });
    }
    return sortedArray;
  };

  /**
   *
   * @param users array of users locations coordinates
   * @returns array of users that are in range
   */
  public findNearbyPartners(
    users: Array<IPartners>,
    lat: number,
    lon: number,
    range: number,
    sort: "asc" | "desc" = "asc"
  ): Array<IPartners> {
    const nearbyUsers = [];
    for (const user of users) {
      let offices = [];
      for (const office of user.offices) {
        const [lat2, lon2] = office.coordinates.split(",").map(Number);
        const distance = this.calculateDistance(lat, lon, lat2, lon2);
        if (distance <= range) {
          offices.push(office);
        }
      }
      if (offices.length) {
        nearbyUsers.push({ ...user, offices });
      }
    }
    return this.sortPartnersByName(nearbyUsers, sort);
  }
}

export default NearbyPartners;
