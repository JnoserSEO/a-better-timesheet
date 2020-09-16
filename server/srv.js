var express = require('express');
var app = express();
var port = 3000;
app.use('/', express.static('public'));
app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
