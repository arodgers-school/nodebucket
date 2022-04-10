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
const ItemDocument = require("./item");

let employeeSchema = new Schema(
  {
    empId: { type: String, unique: true, dropDups: true },
    firstName: { type: String },
    lastName: { type: String },
    todo: [ItemDocument],
    doing: [ItemDocument],
    done: [ItemDocument],
  },
  { collection: "employees" }
);

module.exports = mongoose.model("Employees", employeeSchema);
