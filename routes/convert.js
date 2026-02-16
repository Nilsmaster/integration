const express = require("express");
const hexToRgb = require("../utils/hexToRgb");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const { hex } = req.query;

    const rgb = hexToRgb(hex);

    res.json({
      hex,
      rgb
    });
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
});

module.exports = router;
