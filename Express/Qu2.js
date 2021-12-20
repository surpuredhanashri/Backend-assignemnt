var employee_data = [
  {
    Id: 1,
    name: "Dhanashri",
    dept: "UI DEveloper",
    designation: "Trainee",
  },
  {
    Id: 2,
    name: "Kumar",
    dept: "Full Stack",
    designation: "Trainee",
  },
  {
    Id: 3,
    name: "Rutuja",
    dept: "Testing",
    designation: "Trainee",
  },
  {
    Id: 4,
    name: "Amruta",
    dept: "Salesforce",
    designation: "Trainee",
  },
];

var express = require("express");

var app = express();

app.use(express.json());

app.get("/getAllEmployeeData", (req, res) => {
  res.send(employee_data);
});

app.listen(8000, () => {
  console.log("Server Started on http://localhost:8000");
});
