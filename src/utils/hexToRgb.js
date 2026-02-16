function hexToRgb(hex) {
  if (typeof hex !== "string") return null;

  // Remove leading #
  hex = hex.replace(/^#/, "");

  // Support shorthand hex (#fff)
  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("");
  }

  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return null;

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

module.exports = hexToRgb;
