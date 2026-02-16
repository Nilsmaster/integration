const { expect } = require("chai");
const hexToRgb = require("../utils/hexToRgb");

describe("hexToRgb function", () => {

  it("should convert full hex correctly", () => {
    const result = hexToRgb("#ffffff");
    expect(result).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it("should convert shorthand hex correctly", () => {
    const result = hexToRgb("#000");
    expect(result).to.deep.equal({ r: 0, g: 0, b: 0 });
  });

  it("should throw error for invalid hex", () => {
    expect(() => hexToRgb("invalid")).to.throw();
  });

});