const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const router = require("./src/routes");
const { globalErrorHandler } = require("./src/utilities/globalErrorHandler");

const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((s) => s.trim())
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v2", router);

app.get("/", (req, res) => {
  res.json("server is running!");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// use error handler
app.use(globalErrorHandler);

module.exports = app;
