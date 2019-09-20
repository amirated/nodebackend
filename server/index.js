var express = require("express");
var cors = require('cors');
var path = require('path');
var app = express();

var allowedOrigins = ['http://localhost:4100',
'http://abucketformyself.s3-website.ap-south-1.amazonaws.com'];
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
            'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/db';
var url = "mongodb://localhost:27017";

app.route('/')
    .get(function(req, res)
    {
        res.send({
            message: "Loa",
            status: "SUCCESS",
            data: {result: 'result'}
        });
    });

app.route('/art')
    .get(function(req, res)
    {
        MongoClient.connect(url, function(err, client) {
            if (err) throw err;
            var db = client.db("portfolioDB");
            db.collection("art").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.send({
                    message: "Loa",
                    status: "SUCCESS",
                    data: result
                });
                db.close();
              });
          });
    });

app.route('/music')
    .get(function(req, res)
    {
        MongoClient.connect(url, function(err, client) {
            if (err) throw err;
            var db = client.db("portfolioDB");
            db.collection("music").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.send({
                    message: "Loa",
                    status: "SUCCESS",
                    data: result
                });
                db.close();
              });
          });
    });

app.route('/science')
    .get(function(req, res)
    {
        MongoClient.connect(url, function(err, client) {
            if (err) throw err;
            var db = client.db("portfolioDB");
            db.collection("science").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.send({
                    message: "Loa",
                    status: "SUCCESS",
                    data: result
                });
                db.close();
              });
          });
    });

// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res, next) => {
//  // res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//  res.sendFile(path.resolve('./react_app/index.html'));
//  // res.sendFile('/../react_app/index.html', {root: __dirname});
// });


app.listen(3000, () => {
 console.log("Server running on port 3000");
});