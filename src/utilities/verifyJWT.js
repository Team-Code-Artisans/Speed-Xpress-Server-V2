const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.Authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  const token = authHeader.split(" ")[1];

  console.log("verify token:", token);

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid JWT token" });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = verifyJWT;
