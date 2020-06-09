const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Number: { type: String },
  Information: { type: String },
  date: { type: Date, default: Date.now() },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
