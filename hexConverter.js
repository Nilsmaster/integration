function hexToRgb(hex) {
  if (!hex) return null;

  hex = hex.replace('#', '');

  if (hex.length !== 6) return null;

  const bigint = parseInt(hex, 16);

  if (isNaN(bigint)) return null;

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

module.exports = hexToRgb;