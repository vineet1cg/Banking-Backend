const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
  return res.status(200).json({
    message: "Backend Works :D",
  });
});
app.use("/api/auth", authRoutes);

module.exports = app;
