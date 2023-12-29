const errorRouter = (req, res, next) => {
  next(res.status(404).json("Route Not Found"));
};

const globalErrorHandler = (error, req, res, next) => {
  const status = error.status || 500;
  const message = "Internal Server Error";
  const err = error.message || "Something went wrong";
  res.status(status).json({ status, message, err });
};

module.exports = { globalErrorHandler, errorRouter };
