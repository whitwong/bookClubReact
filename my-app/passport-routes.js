var express = require("express");
var app = express();
var passport = require("passport");
var db = require("./models")

module.exports=function(){
	app.post('/api/users', passport.authenticate('local-signup', 
		{
      successRedirect : '/login', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    }));
    app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/library', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });
}