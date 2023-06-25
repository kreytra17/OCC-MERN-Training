const express = require("express");
const router = express.Router();
const User = require("../models/user");
router.post("/register", async (req, res) => {
  const newuser = new User(req.body);
  try {
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.status(200).json(user);
    } else {
      return res.status(400).json({ error });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
