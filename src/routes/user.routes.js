const express = require("express");
const {
  addUser,
  getAllUsers,
  deleteUserById,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/createUser", addUser);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:Id", deleteUserById);

module.exports = router;
