var express = require("express");

var app = express();

app.use(express.json());

app.post("/total_salary", (req, res) => {
  var hra = req.body.hra;
  var basic = req.body.basic;
  var da = req.body.da;
  var it = req.body.it;
  var pf = req.body.pf;

  res.send({ "tota;_salary": basic + hra + da - (it + pf) });
});

app.listen(8000, () => {
  console.log("Server started");
});
