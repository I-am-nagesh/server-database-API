import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import User from "./models/user.model.js";

import userRoutes from "./routes/user.route.js";

const app = express();
connectDB();

app.use(express.json()); // allows us to accept JSON data in the req.body

// app.get("/", (req, res) => {
//     res.send("Server is working here")
// })

// //POST route to create a user data
// app.post("/users", async (req, res) => {
//   const user = req.body; //user will send this data

//   if (!user.name || !user.email) {
//     return res
//       .status(400)
//       .json({ success: false, message: "please provide all data" });
//   }

//   const newUser = new User(user);
//   try {
//     await newUser.save();
//     res.status(202).json({ success: true, data: newUser });
//   } catch (error) {
//     console.error("error in create user:", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("server is running");
});
