const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const router = require("./src/routes");
const {
  globalErrorHandler,
  errorRouter,
} = require("./src/utilities/globalErrorHandler");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://speed-xpress-v2.vercel.app"],
    credentials: true,
  })
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
  res.json("No Route Found!");
});

// use error handler
app.use(errorRouter);
app.use(globalErrorHandler);

module.exports = app;
