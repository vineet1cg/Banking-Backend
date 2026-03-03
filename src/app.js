const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
  return res.status(200).json({
    message: "Backend Works :D",
  });
});

module.exports = app;
