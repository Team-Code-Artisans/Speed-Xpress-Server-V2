const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 8080;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`🛢️ database connection successfully`);

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}

main();
