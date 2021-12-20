var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("./dbconfig");
const app = express();
app.use(express.json());

var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database successfully..");
  })
  .catch((err) => {
    console.error("Unable to connect to db,because" + err);
  });
let userTable = sequelize.define(
  "UserSequelize",
  {
    userid: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    password: Sequelize.STRING,
    role: Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

userTable
  .sync({ force: true })
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((err) => {
    console.error("Error" + err);
  });

app.get("/", function (req, res) {
  console.log("At get of http://localhost:8003");
  res.send("Hellooo");
});
app.get("/getAll", function (req, res) {
  userTable
    .findAll({ raw: true })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error("There is an error getting data from db: " + err);
      res.status(400).send(err);
    });
});
app.post("/register", function (req, res) {
  (userid = req.body.userid),
    (password = req.body.password),
    (role = req.body.role);
  var userObj = userTable.build({
    userid: userid,
    password: password,
    role: role,
  });
  userObj
    .save()
    .then((data) => {
      var Msg = "Record Inserted Successfully";
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error("There is an error getting data from db: " + err);
      res.status(400).send(err);
    });
});
app.post("/login", function (req, res) {
  console.log("Logging at server side");
  var userid = req.body.userid;
  var password = req.body.password;
  var role = req.body.role;
  userTable
    .findOne({ where: { userid: userid } })
    .then((data) => {
      if (data.userid == userid && data.password == password)
        str = "Valid User";
      res.status(200).send(str);
    })
    .catch((err) => {
      error = "Invalid User";
      console.error("There is an error getting data from db: " + err);
      res.status(401).send(error);
    });
});

app.listen(8003, function () {
  console.log("Server is listening at http://localhost:8003");
});
