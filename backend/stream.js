var fs = require("fs");
var data = '';
let i = 0;
// Create a readable stream
var readerStream = fs.createReadStream('/home/bardo/siklos.sql');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('data', function(chunk) {
    console.log("Chunk(" + i + "):");
    i++;
});

readerStream.on('end',function(){
 //console.log(data);
});
readerStream.on('error', function (err) {
    console.log('Hiba: ',err.stack);
});
console.log("Program Ended");