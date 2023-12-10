const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const router = require("./src/routes");
const { errorHandler, errorRouter } = require("./src/utilities/errorHandler");

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("server is running !!!");
});

app.all("*", (req, res) => {
  res.send("No Route Found... !!");
});

// use error handler
app.use(errorRouter);
app.use(errorHandler);

module.exports = app;
