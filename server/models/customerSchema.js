const mongoose = require("mongoose");
const User = require("./userSchema");

const customerSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    contact: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
