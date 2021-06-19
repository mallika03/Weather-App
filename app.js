var http = require('http');
var url = 'https://goweather.herokuapp.com/weather/Curitiba';

var server = http.createServer(function(request, response) {
    var request = require('request');
    request(url, function(err, res, body){
        console.log(body);
    });
    response.write(body);
    response.end();
}).listen(3843);

console.log("This stupid code should execute now!");