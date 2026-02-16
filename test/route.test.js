const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /hex-to-rgb/:hex Integration Test", () => {
  it("returns RGB for valid hex", async () => {
    const res = await request(app).get("/hex-to-rgb/0000ff");

    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 0, g: 0, b: 255 });
  });

  it("returns 400 for invalid hex", async () => {
    const res = await request(app).get("/hex-to-rgb/xyz");

    expect(res.status).to.equal(400);
    expect(res.body.error).to.equal("Invalid hex format");
  });
});
