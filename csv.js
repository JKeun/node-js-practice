var fs = require('fs');


function readCsv(filePath) {
    var data = fs.readFileSync(filePath, {encoding: "utf8"});
    var rows = data.split("\n");
    
    var headers = rows[0].split(",");

    var result = [];

    rows.slice(1).forEach(function(row) {  // 이번에는 0 번은 포함 x, 1 번 부터
        var rowData = {};

        // rowData["key"] = "value" ( 반복 )
        for (var headerIndex = 0; headerIndex < headers.length; headerIndex ++) {
            var header = headers[headerIndex];
            rowData[header] = row.split(",")[headerIndex];  // rowData[key] = value
        }

        result.push(rowData);
    });

    return result;
}

module.exports = readCsv;


readCsv("./csv/lang.csv");
