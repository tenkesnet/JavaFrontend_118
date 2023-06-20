var fs = require("fs");



fs.readFile('pelda.txt', function (err, data) {
    if (err) return console.error(err);
        console.log(data.toString());
    });
console.log("Program Ended");

for(i=0;i<100000;i++){
    console.log(i);
}

for(i=0;i<10;i++){
    console.log(i);
}



