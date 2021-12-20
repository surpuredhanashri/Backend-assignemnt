// require the file system module
var fs = require("fs");

/*
    Create readable stream to file in current directory named 'node.txt'
    Use utf8 encoding 
    Read the data in 16-kilobyte chunks
*/
var readable = fs.createReadStream("input.txt", {
  encoding: "utf8",
  highWaterMark: 16 * 1024,
});

// create writable stream
var writable = fs.createWriteStream("inputPipe.txt");

// use pipe to copy readable to writable
readable.pipe(writable);


