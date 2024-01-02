const jwt = require("jsonwebtoken");

const getJwtToken = async (req, res) => {
  try {
    const user = req.body;

    if (!user.email && !user.role) {
      return res.status(400).json("Please provide user");
    }

    const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, {
      expiresIn: "1d",
    });

    res.cookie("access_token", token, { httpOnly: true, secure: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getJwtToken;
