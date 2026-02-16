const { expect } = require("chai");
const hexToRgb = require("../src/utils/hexToRgb");

describe("hexToRgb() Unit Tests", () => {
  it("converts full hex to RGB", () => {
    expect(hexToRgb("ff0000")).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("converts shorthand hex to RGB", () => {
    expect(hexToRgb("0f0")).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it("returns null for invalid hex", () => {
    expect(hexToRgb("xyz")).to.equal(null);
  });
});
