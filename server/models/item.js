const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  taskName: { type: String },
  status: { type: String },
});

module.exports = itemSchema;
