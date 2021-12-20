//Employee data
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

//Get All Employee
app.get("/getAllEmployees", (req, res) => {
  res.send(employee_data);
});

//Get Employee by ID
app.get("/getEmployeeById/:id", (req, res) => {
  var id = req.params.id;
  var searched_employee = {};
  employee_data.forEach((element) => {
    if (element.Id == id) {
      searched_employee = element;
    }
  });
  res.send(searched_employee);
});

//Get Employee by name
app.get("/getEmployeeByName/:name", (req, res) => {
  var name = req.params.name;
  var searched_employee = {};
  employee_data.forEach((element) => {
    if (element.name == name) {
      searched_employee = element;
    }
  });
  res.send(searched_employee);
});

//Insert Employee
app.post("/insertEmployeeData", (req, res) => {
  var object = {
    Id: req.body.Id,
    name: req.body.name,
    dept: req.body.dept,
    designation: req.body.designation,
  };
  employee_data.push(object);
  res.send("Inserted Sucessfully");
});

//Update Employee
app.put("/updateEmployeeData/:id", (req, res) => {
  var id = req.params.id;
  var searched_employee = {};
  var index = -1;
  var response_string = "";
  for (var i = 0; i < employee_data.length; i++) {
    if (employee_data[i].Id == id) {
      index = i;
      searched_employee = employee_data[i];
    }
  }
  if (index !== -1) {
    updated_object = {
      Id: req.body.Id == undefined ? searched_employee.Id : req.body.Id,
      name: req.body.name == undefined ? searched_employee.name : req.body.name,
      dept: req.body.dept == undefined ? searched_employee.dept : req.body.dept,
      designation:
        req.body.designation == undefined
          ? searched_employee.designation
          : req.body.designation,
    };
    employee_data[index] = updated_object;
    response_string = "Updated Sucessfully";
  } else {
    response_string = "Invalid Id";
  }
  res.send(response_string);
});

//Delete Employee
app.delete("/deleteRecord/:id", (req, res) => {
  var id = req.params.id;
  var index = -1;
  var response_string = "";
  for (var i = 0; i < employee_data.length; i++) {
    if (employee_data[i].Id == id) {
      index = i;
    }
  }
  if (index == -1) {
    response_string = "No record Found";
  } else {
    employee_data.splice(index, 1);
    response_string = "Deleted Sucessfully";
  }
  res.send(response_string);
});

app.listen(8000, () => {
  console.log("Server Started");
});
