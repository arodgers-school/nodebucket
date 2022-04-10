/*
Title: 
    WEB450 - nobucket: Sprint 3
Author: 
    Adam Rodgers
Date: 
    4/10/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
    WEB450 Zoom SCRUM Meetings
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  taskName: { type: String },
  taskId: { type: String },
  priority: { type: Boolean },
  dueDate: { type: Date },
});

module.exports = itemSchema;
