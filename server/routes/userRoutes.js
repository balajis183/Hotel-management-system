const express = require("express");

// require controllers

const router = express.Router();

const { createUser, getAllusers } = require("../controllers/userControllers");

//create user route
router.post("/register-user", createUser);

// get all users route
router.get("/get-all-users", getAllusers);

//export router
module.exports = router;
