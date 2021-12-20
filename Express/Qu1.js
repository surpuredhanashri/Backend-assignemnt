// var express = require("express");

// var app = express();

// app.get("/login",function(req,res){
//     console.log("At /login of server side...");

//     var uid = req.query.uid;
//     var pwd = req.query.password;

//     console.log(`Given data for user id ${uid} pwd:${pwd}`);

//     var strToReturn = "you are not a valid user, pls check the credentials";

//     if(uid == 'Dhanashri' && pwd=='admin')
//         strToReturn = "you are a valid user";

//     res.send(strToReturn);

// })

// app.listen(8000, function(){
//     console.log("server is listening at http://localhost:8000");
// })

var express = require("express");
var app = express();

app.use(express.json());

app.post("/login", function (req, res) {
  console.log("At /login of server side...");

  var uid = req.body.uid;
  var pwd = req.body.password;

  console.log(`Given data for user id ${uid} pwd:${pwd}`);

  var strToReturn = "you are not a valid user, pls check the credentials";

  if (uid == "Dhanashri" && pwd == "admin")
    strToReturn = "you are a valid user";

  res.send(strToReturn);
});

app.listen(8000, function () {
  console.log("server is listening at http://localhost:8000");
});
