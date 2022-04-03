const express = require("express");
const Employee = require("../models/employee");

const router = express.Router();

router.get("/:empId", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, function (err, employee) {
      if (err) {
        res.status(500).send({
          message: "Server error: " + err.message,
        });
      } else {
        res.json(employee);
        console.log("first get");
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "Server error: " + e.message,
    });
  }
});

router.get("/:empId/tasks", async (req, res) => {
  try {
    Employee.findOne({ empId: req.params.empId }, "empId task.taskName", function (err, employee) {
      if (err) {
        res.status(500).send({
          message: "Internal server error: " + err.message,
        });
      } else {
        res.json(employee);
        console.log("second get");
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "Internal server error: " + e.message,
    });
  }
});

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
            console.log("first post");
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
