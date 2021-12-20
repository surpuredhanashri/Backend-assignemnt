var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("./dbConfig");

var app = express();

//connect to the db.
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idel: dbConfig.pool.idle,
  },
});

//Define the structure of employeeSequelixe table

let EmployeeTable = sequelize.define(
  "employeeSequelize",
  {
    emp_id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    dept: Sequelize.STRING,
    designation: Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// EmployeeTable.sync({ force: true })
//   .then(() => {
//     console.log("table created successfully");
//   })
//   .finally(() => {
//     sequelize.close();
//   });

app.get("/", function (req, res) {
  console.log("At Get of http://localhost:8001");
  res.send("Hello..");
});

//Retrieves data of all the employee
app.get("/getAllEmployee", function (req, res) {
  EmployeeTable.findAll({ raw: true })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error("there is an error getting data from db:" + err);
      res.status(400).send(err);
    });
});

//obtains the data by primary key

app.get("/getEmployeeById/:id", function (req, res) {
  var id = req.params.id;
  console.log("given id is:" + id);

  EmployeeTable.findByPk(id, { raw: true })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error("there is an error getting data from db" + err);
      res.status(400).send(err);
    });
});

//inserts a record table into table employeeSequelize

app.use(express.json());
app.post("/insertEmployee", function (req, res) {
  var emp_id = req.body.emp_id;
  var name = req.body.name;
  var dept = req.body.dept;
  var designation = req.body.designation;

  var empObj = EmployeeTable.build({
    emp_id: emp_id,
    name: name,
    dept: dept,
    designation: designation,
  });

  empObj
    .save()
    .then((data) => {
      var strMsg = "Record inserted successfully";
      res.status(201).send(strMsg);
    })
    .catch((err) => {
      console.error("error is" + err);
      res.status(400).send(err);
    });
});

//update the record
app.put("/updateEmployee", function (req, res) {
  var emp_id = req.body.emp_id;
  var name = req.body.name;
  var dept = req.body.dept;
  var designation = req.body.designation;

  EmployeeTable.update(
    { name: name, dept: dept, designation: designation },
    { where: { emp_id: emp_id } }
  )
    .then((data) => {
      console.log(data);
      var strMsg = "Record updated successfully";
      res.status(201).send(strMsg);
    })
    .catch((err) => {
      console.error("error is" + err);
      res.status(400).send(err);
    });
});

//delete the record by id
app.delete("/deleteEmployeeById/:id", function (req, res) {
  console.log("entering deleteEmployeeid");
  var id = req.params.id;
  console.log("Given id is" + id);

  EmployeeTable.destroy({ where: { emp_id: id } })
    .then((data) => {
      console.log(data);
      var strMsg = "Record deleted successfully";
      res.status(200).send(strMsg);
    })
    .catch((err) => {
      console.log("there is an error" + err);
      err.status(400).send(err);
    });
});

app.listen(8001, function () {
  console.log("server is listening at http://localhost:8001");
});
