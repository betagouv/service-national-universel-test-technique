const request = require("supertest");
const getAppHelper = require("./helpers/app");
const { ActivityModel } = require("../models");

jest.spyOn(ActivityModel, "find").mockImplementation(() => ({
  sort: () => Promise.resolve([]),
}));

describe("Activity Controller", () => {
  describe("GET /api/activity", () => {
    it("should return a list of activities", async () => {
      const res = await request(getAppHelper()).get("/activity");
      expect(res.statusCode).toEqual(200);
      expect(res.body.ok).toEqual(true);
      expect(res.body.data.length).toBe(0);
    });
  });
});
