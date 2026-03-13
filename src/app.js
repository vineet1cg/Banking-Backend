const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");


//middleware
app.use(express.json());
app.use(cookieParser());


//routes
app.get("/", (req, res) => {
  res.send("Hello World");
  return res.status(200).json({
    message: "Backend Works :D",
  });
});
app.use("/api/auth", authRoutes);
console.log("GithubCheck");
module.exports = app;