const jwt = require("jsonwebtoken");

const getJwtToken = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: "1h",
  });

  res.cookie("access_token", token, { httpOnly: true, secure: true });
  res.send({ success: true });
};

module.exports = getJwtToken;
