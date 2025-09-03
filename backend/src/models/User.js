const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // validation for 10-digit mobile number
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100,
    },
    height: {
      type: Number, // in cm
      required: true,
    },
    weight: {
      type: Number, // in kg
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    healthCondition: {
      type: String,
      default: "None",
      trim: true,
    },
    profile: {
      type: String, // store image URL or path
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);


module.exports = User;
