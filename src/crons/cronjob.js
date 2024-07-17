const cron = require("node-cron");
const sendEmail = require("../services/email.service");
const userService = require("../services/user.service");

// Check for birthdays
const checkBirthdays = async () => {
  console.log("Check your birthday.");
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth() + 1;

  // Get all users
  try {
    const users = await userService.getAllUsers();
    console.log('Cron job started', users);
    users.forEach(async (user) => {
      
      // Get the user's birthdate
      const birthDay = user.birthdate.getDay();
      const birthMonth = user.birthdate.getMonth() + 1;

      // Check if today is the user's birthday
      if (birthDay === day && birthMonth === month) {
        await sendEmail(user.email, user.username);
      }
    });
  } catch (error) {
    console.error("Error checking for birthdate", error);
  } finally {
    console.log("Cronjob ended");
  }
};

const startCronJob = () => {
  cron.schedule(" * * * * *", checkBirthdays, { // This cron job runs every minute
    timezone: "Africa/Lagos",
  });
  console.log("Cronjob is active");
};

module.exports = startCronJob;
