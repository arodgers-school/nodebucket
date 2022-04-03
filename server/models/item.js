/*
Title: 
    WEB450 - nobucket: Sprint 2
Author: 
    Adam Rodgers
Date: 
    4/3/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Build schema for items. Added status to separate todo from completed by task status

let itemSchema = new Schema({
  taskName: { type: String },
  status: { type: String },
});

module.exports = itemSchema;
