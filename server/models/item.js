const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

let itemSchema = new Schema({
  text: { type: String },
});

module.exports = itemSchema;
