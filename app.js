const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

const router = require("./src/routes");
const {
  globalErrorHandler,
  errorRouter,
} = require("./src/utilities/globalErrorHandler");

app.use(
  cors({
    origin: ["http://localhost:3000", process.env.CLIENT_URL],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v2", router);

app.get("/", (req, res) => {
  res.send("server is running!");
});

app.all("*", (req, res) => {
  res.send("No Route Found!");
});

// use error handler
app.use(errorRouter);
app.use(globalErrorHandler);

module.exports = app;
