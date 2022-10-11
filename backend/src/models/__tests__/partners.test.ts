import Partners from "../partners";

describe("Partners test suites", () => {
  it("should get all partners", async () => {
    const partnerInstance = new Partners();
    const partners = await partnerInstance.read();
    expect(partners).toBeDefined();
  });

  it("should return 17 objects - predefined partners", async () => {
    const partnerInstance = new Partners();
    const partner = await partnerInstance.read();
    expect(partner).toHaveLength(17);
  });
});
