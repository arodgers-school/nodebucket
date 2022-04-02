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
    Employee.findOne({ empId: req.params.empId }, "empId todo done", function (err, employee) {
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

module.exports = router;
