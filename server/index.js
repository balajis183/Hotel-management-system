const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

//import routes

const userRoutes = require("./routes/userRoutes");

const connect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/HotelManagement");
    console.log("Connected to Database of MongoDB");
  } catch {
    console.log(err.message);
  }
};

// cors middleware
app.use(cors());

// used to parse json requests
app.use(bodyparser.json());

app.get("/", (req, res) => {
//   res.send("Server is working");
  res.send("Welcome to Hotel Management Syste and server is working  ");
});

//call user Routes
app.use("/users", userRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is listening on port ", 8000);
  console.log(`http://localhost:8000`);
  connect();
});
