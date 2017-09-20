// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/dewey");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

// Listener
db.sequelize.sync({ force: true }).then(function () {

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

