// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var morgan = require("morgan");
var cookieParser = require('cookie-parser')
var flash    = require('connect-flash');
var session      = require('express-session');

var db = require("./models");
// require('./passport.js');
// require('./passport-routes.js');
// require('./library-api-routes');


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

//Routes
var LocalStrategy = require('passport-local').Strategy;

app.post("/api/library", function(req,res){
		var useId = req.user.id;
	db.Library.create({
		title: req.body.title,
		author: req.body.author,
		comments: req.body.comments,
		UserId: useId
	}).then(function(results){
		results.userInfo = req.user;
		console.log
		res.json(results);
	});
});

 passport.serializeUser(function(user, done) {
        done(null, user.id);
        console.log("User Id: "+user.id);
    });

  passport.deserializeUser(function(id, done) {
    db.User.findOne({
      where: {
        id: id
      },
    }).then(function(result) {
        done(null, result);
    });
  });

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'username',
      nameField: 'name',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, username, password, done) {
      db.User.findOne({ 
        where : {
          email: username
        }
      }).then(function(user) {
        if (user !==null)
        {
          return done(null, false, req.flash('signupMessage',"That email is already taken"));
        } else
        {
          var newUser={

            email: username,
            name: req.body.name,
            password: password
          };

          db.User.create(newUser).then(function(result){
            newUser.id=result.id;
            return done(null, newUser);
          });
        }
      });
  }));

//   //LOCAL SIGNIN
  passport.use('local-login', new LocalStrategy(
    {
        usernameField: 'username', 
        passwordField: 'password',
        passReqToCallback: true 
    },
    function(req, username, password, done) {
      db.User.findOne({
          where: {
              email: username,
              password: password
          }
      }).then(function(result) {
          if (result===null) { 
              return done(null, false);
          }
          return done(null,result)
      });
  }));

function signInUser(req, res, error, user, info){
  if(error) { return res.status(500).json(error); }
  if(!user) { return res.status(401).json(info.message); }
  var userId = user.id;
  sessionHelper.setCurrentUserId(req, res, userId);
  res.status(200).json(user);
}

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

app.post('/api/users', function(req, res, next){
  passport.authenticate('local-signup', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

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

