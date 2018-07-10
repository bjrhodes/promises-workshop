var http = require("http");
var https = require("https");
var express = require("express");
var app = express();

var server = http.createServer(app);
var dsKey = "YOUR KEY";

app.get('/forecast/', function(req, res) {
    var host = "api.darksky.net";
    path = "/forecast/" + encodeURIComponent(dsKey) + "/" + req.query.lat + encodeURIComponent(",") + req.query.lng;

    https.get({host: host, path: path}, function(dsReq) {
        var responseString = '';
        dsReq.on("data", function (data) {
            responseString += data;
        });
        dsReq.on("end", function () {
            res.setHeader('Content-type', 'application/json');
            res.send(responseString);
        });
    });
});

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
console.log("Listening on http://127.0.0.1:8080");
server.listen('8080', '127.0.0.1');


