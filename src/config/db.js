const mongoose = require("mongoose");

const connectDb = async (MONGODB_URL) => {
  if (!MONGODB_URL) {
    console.log("MONGODB_URL not provided");
    process.exit(1); //exit the process
  }
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
};

module.exports = connectDb;
