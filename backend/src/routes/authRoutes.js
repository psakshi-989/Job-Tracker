const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");

// POST -> Signup
router.post("/signup", signup);

// POST -> Login
router.post("/login", login);

module.exports = router;
