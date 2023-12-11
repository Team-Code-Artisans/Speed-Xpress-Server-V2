const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const router = require("./src/routes");
const {
  globalErrorHandler,
  errorRouter,
} = require("./src/utilities/globalErrorHandler");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

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
