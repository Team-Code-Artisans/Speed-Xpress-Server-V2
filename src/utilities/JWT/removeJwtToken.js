const removeJwtToken = async (req, res) => {
  try {
    res.cookie("access_token", "", {
      expires: new Date(Date.now()),
    });

    res
      .status(200)
      .json({ success: true, message: "Remove token successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = removeJwtToken;
