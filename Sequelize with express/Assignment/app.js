var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("./dbConfig");
var cors = require("cors");

var app = express();
app.use(cors());

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
let InsuranceTable = sequelize.define(
  "InsuranceTable",
  {
    policyNumber: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    policyHolderName: Sequelize.STRING,
    policyAmount: Sequelize.INTEGER,
    maturityAmount: Sequelize.INTEGER,
    nominee: Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// InsuranceTable.sync({ force: true })
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
app.get("/getAllPolicy", function (req, res) {
  InsuranceTable.findAll({ raw: true })
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

app.get("/getPolicyById/:id", function (req, res) {
  var id = req.params.id;
  console.log("given id is:" + id);

  InsuranceTable.findByPk(id, { raw: true })
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
app.post("/insertData", function (req, res) {
  var policyNumber = req.body.policyNumber;
  var policyHolderName = req.body.policyHolderName;
  var policyAmount = req.body.policyAmount;
  var maturityAmount = req.body.maturityAmount;
  var nominee = req.body.nominee;

  var insuranceObj = InsuranceTable.build({
    policyNumber: policyNumber,
    policyHolderName: policyHolderName,
    policyAmount: policyAmount,
    maturityAmount: maturityAmount,
    nominee: nominee,
  });

  insuranceObj
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

//
app.post("/BulkInsuranceData", function (req, res) {
  InsuranceTable.bulkCreate(req.body)
    .then((data) => {
      var strMsg = "Record inserted successfully";
      res.status(201).send(strMsg);
    })
    .catch((err) => {
      console.error("error is:" + err);
      res.status(400).send(err);
    });
});

//update the record
app.put("/updateInsurance", function (req, res) {
  var policyNumber = req.body.policyNumber;
  var policyHolderName = req.body.policyHolderName;
  var policyAmount = req.body.policyAmount;
  var maturityAmount = req.body.maturityAmount;
  var nominee = req.body.nominee;

  InsuranceTable.update(
    {
      policyNumber: policyNumber,
      policyHolderName: policyHolderName,
      policyAmount: policyAmount,
      maturityAmount: maturityAmount,
      nominee: nominee,
    },
    { where: { policyNumber: policyNumber } }
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
app.delete("/deleteInsuranceid/:id", function (req, res) {
  console.log("entering deleteInsuranceid");
  var id = req.params.id;
  console.log("Given id is" + id);

  InsuranceTable.destroy({ where: { policyNumber: id } })
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
