import { request } from "http";
import NearbyPartners from "../FindNearby";
import GreateCircleDistance from "../GreateCircleDistance";
import Server from "../Server";

describe("Greate circle distance service", () => {
  it("should throw an error for wrong coordinates", () => {
    const service = new GreateCircleDistance();
    expect(() => service.calculateDistance(0, 0, 0, 181)).toThrowError(
      "Invalid degrees"
    );
  });

  it("should calculate the distance between two points", () => {
    const service = new GreateCircleDistance();
    const distance = service.calculateDistance(0, 0, 0, 1);
    expect(distance).toBe(111.19492664455873);
  });

  it("should calculate the distance between two points", () => {
    const service = new GreateCircleDistance();
    const distance = service.calculateDistance(0, 0, 1, 0);
    expect(distance).toBe(111.19492664455873);
  });
});

describe("Server test suites", () => {
  it("should start the server", () => {
    const server = new Server();
    expect(server).toBeDefined();
  });
});

describe("Find nearby partners test suites", () => {
  it("should find nearby partners", async () => {
    const NearbyFinder = new NearbyPartners();
    const partnersList = [
      {
        id: "1",
        offices: [
          {
            coordinates: "1.28304,103.85199319999992",
          },
          {
            coordinates: "51.5014767,-0.0713608999999451",
          },
        ],
      },
      {
        id: "2",
        offices: [
          {
            coordinates: "52.277409,-0.877935999999977",
          },
          {
            coordinates: "51.5136102,-0.08757919999993646",
          },
          {
            coordinates: "53.47990859999999,-2.2510892999999896",
          },
        ],
      },
    ];
    const nearbyPartners = NearbyFinder.findNearbyPartners(
      partnersList as any,
      51.5144636,
      -0.142571,
      5
    );
    expect(nearbyPartners).toEqual([
      {
        id: "2",
        offices: [
          {
            coordinates: "51.5136102,-0.08757919999993646",
          },
        ],
      },
    ]);
  });
});
