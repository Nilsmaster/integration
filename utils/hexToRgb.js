function hexToRgb(hex) {
  if (!hex || typeof hex !== "string") {
    throw new Error("Invalid hex color");
  }

  // Remove #
  hex = hex.replace(/^#/, "");

  // Expand shorthand form (e.g. "03F")
  if (hex.length === 3) {
    hex = hex.split("").map(char => char + char).join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid hex format");
  }

  const bigint = parseInt(hex, 16);

  if (isNaN(bigint)) {
    throw new Error("Invalid hex value");
  }

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

module.exports = hexToRgb;
