const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

describe("GET /api/convert", () => {

  it("should return correct RGB value", async () => {
    const res = await request(app)
      .get("/api/convert")
      .query({ hex: "#ff0000" });

    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("should return 400 for invalid hex", async () => {
    const res = await request(app)
      .get("/api/convert")
      .query({ hex: "invalid" });

    expect(res.status).to.equal(400);
  });

});