var fs = require("fs");


fs.readFile('pelda2.txt', function(err, fd) {
 if (err) {
 return console.error(err);
 }
    for(i=0;i<1;i++){
        Math.sqrt(i);
    }
 console.log("File opened2 successfully!");
});

// Asynchronous read
fs.readFile('pelda.txt', function (err, data) {
 if (err) {
 return console.error(err);
 }
 console.log("Asynchronous read: " + data.toString());
});
// Synchronous read
var data = fs.readFileSync('pelda.txt');
console.log("Synchronous read: " + data.toString());



console.log("Going to get file info!");
fs.stat('node_modules', function (err, stats) {
 if (err) {
 return console.error(err);
 }
 console.log(stats);
 console.log("Got file info successfully!");

 // Check file type
 console.log("isFile ? " + stats.isFile());
 console.log("isDirectory ? " + stats.isDirectory());
});

// Asynchronous - Opening File



console.log("Program Ended");