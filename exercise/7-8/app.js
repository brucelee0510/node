var express = require("express");
var bodyParser = require("body-parser");


var app = express();



app.use(bodyParser());
app.get("/", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});







app.listen(process.env.PORT || 3000);
