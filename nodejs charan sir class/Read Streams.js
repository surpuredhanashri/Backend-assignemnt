var fs = require("fs");
var fileData = "";
var readerStream = fs.createReadStream("input.txt");

readerStream.on("data", function (readData) {
  fileData = readData;
});

readerStream.on("end", function (readData) {
  console.log("Read data:" + fileData);
});

readerStream.on("error", function (err) {
  console.log("Error is " + err);
});
