// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
//const passport = require("passport");
const morgan = require("morgan");
const path = require('path');
/* var cookieParser = require('cookie-parser')
var flash = require('connect-flash');
var session = require('express-session'); */

var db = require("./models");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(morgan('dev'));

// Static directory
app.use(express.static("public"));

/* app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
 */
/* app.get("/api/groups/discussions", function (req, res) {

  db.User.findById(req.user.id)
    .then(function (user) {
        user.getGroups({
          include: [db.Discussion]
        })
          .then(function (groups) {
            res.json(groups);
          });
    });
}); */

app.post("/api/library", function (req, res) {
  db.Library.create({
    title: req.body.title,
    author: req.body.author,
    comments: req.body.comments
  }).then(function (results) {
    results.userInfo = req.user;
    console.log
    res.json(results);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// -------------------------------------------------

// Listener
db.sequelize.sync({ force: true }).then(function () {

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});