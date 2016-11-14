var fs = require('fs');


function readCsv(filePath) {
    var data = fs.readFileSync(filePath, {encoding: "utf8"});
    console.log(data);
}

module.exports = readCsv;


readCsv("./csv/lang.csv");
