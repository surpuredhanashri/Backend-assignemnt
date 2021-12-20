const fs = require("fs");
var readline = require("readline-sync");

fs.readFile("input.txt", function (err, data) {
  if (err) console.log("There is an error" + err);
  else console.log("Read data is Asynchrous is:" + data);

  var strarr = data.toString();
  var str = strarr.split(" ");

  console.log(str);

  var count = 0;
  for (var i = 0; i < data.length; i++) {
    if (str[i] != " ") count = count + 1;
  }

  console.log(count);

  splitdata = readline.question("Enter a string : ");

  console.log("Give input data : " + splitdata);

  var cnt = 0;
  for (var i = 0; i < str.length; i++) {
    if (splitdata == str[i]) {
      cnt++;
    }
    //  else if (splitdata !== str[i]) {
    //   console.log("string not present");
    // }
  }
  console.log("string present : " + cnt);
});
