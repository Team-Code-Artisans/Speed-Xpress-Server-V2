const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const userToken = req.cookies.access_token;

  if (!userToken) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  jwt.verify(userToken, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid JWT token" });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = verifyJWT;
