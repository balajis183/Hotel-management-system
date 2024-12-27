// import user model

const userModel = require("../models/userSchema");

// controller to insert user data into database

const createUser = async (req, res) => {
  try {
    const { name, email, password, role, contact } = req.body;
    const UserDoc = new userModel({ name, email, password, role, contact });
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

module.exports = { createUser, getAllusers };
