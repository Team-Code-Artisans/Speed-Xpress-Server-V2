const Error = require("http-errors");

const errorRouter = (req, res, next) => {
  next(Error(404, "Route Not Found"));
};

const errorHandler = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  res.status(status).json({ status, message });
};

module.exports = { errorHandler, errorRouter };
