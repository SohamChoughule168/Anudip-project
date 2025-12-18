const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

// Route to register users
router.post("/register", registerUser);

module.exports = router;