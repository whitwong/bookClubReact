// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var morgan = require("morgan");
var cookieParser = require('cookie-parser')
var flash    = require('connect-flash');
var session      = require('express-session');

var db = require("./models");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(morgan('dev'));

// Static directory
app.use(express.static("public"));

// required for passport
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// -------------------------------------------------

require("./config/passport.js");
require("./config/passport-routes.js");

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

