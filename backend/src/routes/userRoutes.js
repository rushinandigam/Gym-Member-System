const express = require("express");
const {
  registeruser,
  getallusers,
  getsingleuser,
  updateuser,
  deleteuser,
} = require("../controllers/UserControllers");
const upload = require("../middleware/profileupload");
const routes = express.Router();

routes.post("/registeruser", upload.single("profile"), registeruser);

routes.get("/getallusers", getallusers);

routes.get("/getsingleuser/:id", getsingleuser);

routes.put("/updateuser/:id", upload.single("profile"), updateuser);

routes.delete("/deleteuser/:id", deleteuser);

module.exports = routes;
