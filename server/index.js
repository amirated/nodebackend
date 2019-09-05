var express = require("express");

var app = express();
var path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
 // res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 res.sendFile(path.resolve('./react_app/index.html'));
 // res.sendFile('/../react_app/index.html', {root: __dirname});
});


app.listen(3000, () => {
 console.log("Server running on port 3000");
});