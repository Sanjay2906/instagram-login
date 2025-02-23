const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Render login page
router.get("/", (req, res) => {
  res.render("login");
});

// Handle login form submission
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.send("Verification successful, you can use your account.");
  } catch (err) {
    res.status(500).send("Error saving data.");
  }
});

module.exports = router;
