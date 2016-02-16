var express = require("express")
var app = express();

app.use(express.static("./public"));
app.use(express.static("./node_modules/bootstrap/dist"));

app.listen(9000);
console.log('server running on port 9000')
