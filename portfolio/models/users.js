const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String },
  information: { type: String },
  date: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
