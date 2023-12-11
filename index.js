const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 8080;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`🛢️ Database connection successfully`);

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error.message);
  }
}

main();
