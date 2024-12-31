// import user model

const userModel = require("../models/userSchema");

// controller to insert user data into database

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Passwords do not match and signup failed " });
    }

    console.log(req.body);

    const UserDoc = new userModel({ name, email, password, role });
    await UserDoc.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

const getAllusers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json("Server not functioning or unable to fetch users");
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email using UserSchema
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the stored password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Successful login
    res.status(200).json({
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { createUser, getAllusers, loginuser };
