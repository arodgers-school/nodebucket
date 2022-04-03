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

const express = require("express");
const Employee = require("../models/employee");

const router = express.Router();

// Find Employee API
router.get("/:empId", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, function (err, employee) {
      if (err) {
        res.status(500).send({
          message: "Server error: " + err.message,
        });
      } else {
        res.json(employee);
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "Server error: " + e.message,
    });
  }
});

// Find all tasks API
router.get("/:empId/tasks", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, "empId task.taskName task.status", function (err, employee) {
      if (err) {
        res.status(500).send({
          message: "Internal server error: " + err.message,
        });
      } else {
        res.json(employee);
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "Internal server error: " + e.message,
    });
  }
});

// Create new task API
router.post("/:empId/tasks", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, function (err, employee) {
      if (err) {
        res.status(500).send({
          message: "Internal server error: " + err.message,
        });
      } else {
        const newItem = {
          taskName: req.body.taskName,
          status: "todo",
        };
        employee.task.push(newItem);
        employee.save(function (err, updatedEmployee) {
          if (err) {
            res.status(500).send({
              message: "Internal server error: " + err.message,
            });
          } else {
            res.json(updatedEmployee);
          }
        });
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "Internal server error: " + err.message,
    });
  }
});

module.exports = router;
