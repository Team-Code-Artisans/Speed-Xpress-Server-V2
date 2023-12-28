const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  const tokens = authHeader.split(";");

  if (tokens.length !== 2) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  const stripeToken = tokens[0].trim().replace("Bearer ", "");
  const userToken = tokens[1].trim().replace("Bearer ", "");

  jwt.verify(userToken, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid JWT token" });
    }

    req.decoded = decoded;

    if (stripeToken !== process.env.STRIPE_PUBLISHABLE_KEY) {
      return res.status(401).json({ message: "Invalid Stripe token" });
    }

    next();
  });
};

module.exports = verifyJWT;
