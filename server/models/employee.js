/*
Title: 
    WEB450 - nobucket: Sprint 1
Author: 
    Adam Rodgers
Date: 
    3/27/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemDocument = require("./item");

let employeeSchema = new Schema(
  {
    empId: { type: String, unique: true, dropDups: true },
    firstName: { type: String },
    lastName: { type: String },
    task: [{ taskName: String }],
  },
  { collection: "employees" }
);

module.exports = mongoose.model("Employees", employeeSchema);
