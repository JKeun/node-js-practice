var request = require('request');

var requestOption = {
    url: "https://www.yogiyo.co.kr/api/v1/restaurants-geo/?items=20&order=rank&page=0&search=&zip_code=135120",
    headers: {
        "X-ApiKey": "iphoneap",
        "X-ApiSecret": "fe5183cc3dea12bd0ce299cf110a75a2"
    }
};

request(requestOption, function(error, res, body) {
    console.log(JSON.parse(body));
});
