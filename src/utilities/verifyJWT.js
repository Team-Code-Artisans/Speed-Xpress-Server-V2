const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  jwt.verify(authHeader, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid JWT token" });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = verifyJWT;
