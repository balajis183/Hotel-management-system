const mongoose = require("mongoose");
// const { type } = require("os");

// Define role constants for better readability

const Roles = {
  CUSTOMER: 1,
  STAFF: 2,
};

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: { type: String, required: true, minlength: 6 },

    role: {
      type: Number,
      required: true,
      enum: Object.values(Roles),
      default: 1,
    },
  },

  {
    timestamps: true,
  }
);

//create a user model

const User = mongoose.model("User", userSchema);

module.exports = User ;
