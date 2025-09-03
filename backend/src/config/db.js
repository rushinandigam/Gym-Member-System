const mongoose = require("mongoose");

const monogoConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/gymDb")
    .then(() => {
      console.log("Connected to the database");
    })
    .catch(() => {
      console.log("Error connecting to the database ");
    });
};

module.exports = monogoConnect;
