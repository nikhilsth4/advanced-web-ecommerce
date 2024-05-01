const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

// Define order routes
// For example:
router.get("/:id", async (req, res) => {
  try {
    const user = await User.find({ userId: req.params.id });
    if (!user) return res.status(404).send("cannot find");
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId } = req.body;

    let user = await User.findOneAndUpdate(
      { userId },
      { userId },
      { new: true, upsert: true }
    );

    // Respond with the user data
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
