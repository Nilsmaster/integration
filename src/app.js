const express = require("express");
const hexToRgb = require("./utils/hexToRgb");

const app = express();
app.use(express.json());

app.get("/hex-to-rgb/:hex", (req, res) => {
  const { hex } = req.params;
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return res.status(400).json({ error: "Invalid hex format" });
  }

  res.json({ hex, rgb });
});

module.exports = app;
