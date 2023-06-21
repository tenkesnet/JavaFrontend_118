var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
    if (err) {
        return console.error(err);
    }
    
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error("Hiba");
        }
        console.log("Asynchronous read: " + data.toString());
        fs.unlink('input.txt', function (err) {
            if (err) {
                return console.error("Hiba");
            }
        });
    });

    
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
});

