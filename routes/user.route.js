import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

//POST route to create a user data
router.post("/", async (req, res) => {
  const user = req.body; //user will send this data

  if (!user.name || !user.email) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all data" });
  }

  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(202).json({ success: true, data: newUser });
  } catch (error) {
    console.error("error in create user:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
