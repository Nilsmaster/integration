const express = require("express");
const convertRoute = require("./routes/convert");

const app = express();

app.use(express.json());
app.use("/api/convert", convertRoute);

module.exports = app;
