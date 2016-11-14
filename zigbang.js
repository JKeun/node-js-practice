var request = require('request');

url = "http://api.zigbang.com/v1/items?detail=true&item_ids=3440910";

request(url, function(error, res, body) {
    console.log(JSON.parse(body));
});
