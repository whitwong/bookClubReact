var db = require("../models");

module.exports = function(app){
	app.post("/api/library", function(req,res){
			// var useId = req.user.id;
		db.Library.create({
			title: req.body.title,
			author: req.body.author,
			comments: req.body.comments,
			// UserId: useId
		}).then(function(results){
			// results.userInfo = req.user;
			res.json(results);
		});
	});
}