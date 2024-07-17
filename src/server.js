const connectDb = require("./config/db");
const express = require("express");
const app = require("../app");
const dotenv = require("dotenv");
const startCronJob = require("../src/crons/cronjob");

dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

connectDb(MONGODB_URL)
  .then(() => {
    // Start the cron job
    startCronJob();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit process on database connection error
  });
