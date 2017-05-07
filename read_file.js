var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('test_async.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");
});