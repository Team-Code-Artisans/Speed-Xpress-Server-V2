const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const { errorHandler, errorRouter } = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
connectDB();

// use routes
app.use("/users", require("./route/userRoute"));

app.get("/", (req, res) => {
  res.status(200).json({ message: `Server listening on port ${port}` });
});

// use error handler
app.use(errorRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
