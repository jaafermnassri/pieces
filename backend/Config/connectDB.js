const mongoose = require("mongoose");

require('dotenv').config({path:"./backend/.env"});
async function connectDB() {

  try {
    await mongoose.connect("mongodb+srv://jaafer:aqwerty6@cluster0.v3z3exv.mongodb.net/solidw?retryWrites=true&w=majority");
    console.log("Database successfully connected");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;