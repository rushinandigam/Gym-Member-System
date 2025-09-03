const User = require("../models/User");
const multer = require("multer");

const registeruser = async (request, response) => {
  try {
    const { name, mobile, age, height, weight, email, healthCondition } =
      request.body;
    if (await User.findOne({ $or: [{ email }, { mobile }] })) {
      response.status(200).json({
        Attention: "User already existed ",
      });
    }

    const profile = request.file
      ? `http://localhost:5000/uploads/${request.file.filename}`
      : "";
    console.log(profile);
    const newUser = new User({
      name,
      mobile,
      age,
      height,
      weight,
      email,
      healthCondition,
      profile,
    });

    const savedUser = await newUser.save();
    response
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    response.json({
      message: "error occured while saving user",
      error: error.message,
    });
  }
};

const getallusers = async (request, response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (error) {
    response.json({
      message: "error occured while fetching users",
      error: error.message,
    });
  }
};

const getsingleuser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    response.json(user);
  } catch (error) {
    response.status(500).json({
      message: "Error occurred while fetching user",
      error: error.message,
    });
  }
};

const updateuser = async (request, response) => {
  try {
    const updateData = { ...request.body };
    if (request.file) {
      updateData.profile = `http://localhost:5000/uploads/${request.file.filename}`;
    }
    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      updateData,
      { new: true }
    );
    if (!updatedUser) {
      return response.status(404).json({ message: "User not found" });
    }
    response.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const deleteuser = async (request, response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(request.params.id);
    if (!deletedUser) {
      return response.status(404).json({ message: "User not found" });
    }
    response.json({ message: "User deleted successfully" });
  } catch (error) {
    response.status(500).json({
      message: "Error occurred while deleting user",
      error: error.message,
    });
  }
};

module.exports = {
  registeruser,
  getallusers,
  getsingleuser,
  updateuser,
  deleteuser,
};
