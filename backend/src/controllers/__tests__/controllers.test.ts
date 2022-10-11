import { getNearbyPartners } from "../partnersController";
// util/interceptor.js
const interceptor: any = {
  mockRequest: () => {
    const req: any = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
  },

  mockResponse: () => {
    const res: any = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  },
  // mockNext: () => jest.fn()
};

describe("Controllers test suites", () => {
  it("should get nearby partners", async () => {
    let req = interceptor.mockRequest();
    let res = interceptor.mockResponse();
    req.query = {
      lat: 51.5144636,
      lon: -0.142571,
      range: 5,
    };
    await getNearbyPartners(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: [
        {
          id: 13,
          urlName: "gallus-consulting",
          organization: "Gallus Consulting",
          customerLocations: "across the UK",
          willWorkRemotely: true,
          website: "http://www.gallusconsulting.com/",
          services:
            "We're strategy consultants with a difference - we work with organisations and their leaders to take them from strategy to reality. In our work with leaders we often use 360-degree feedback to identify capability gaps, improve self-awareness, and develop strategic and cultural alignment. Our aim is for believe-able leaders to emerge with the drive, capability and cultural fit to take strategy to reality.",
          offices: [
            {
              location: "London",
              address: "No1 Royal Exchange, London, EC3V 3DG",
              coordinates: "51.5136102,-0.08757919999993646",
            },
          ],
        },
      ],
    });
  });
});
