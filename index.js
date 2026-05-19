require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 8080;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      serverSelectionTimeoutMS: 5000,
      family: 4
    });
    console.log(`🛢️ Database connection successfully`);

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.error(`Failed to connect database: ${error.message}`);
    process.exit(1);
  }
}

main();
