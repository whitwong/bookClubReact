	// Read all current discussions in database and display on discussions.html
	app.get("/api/group/discussions", function(req, res){
		db.Group.findAll({
			include: [db.Discussion]
		}).then(function(results){
			res.json(results);
		});
	});

  // Get a specific Group's discussions
	app.get("/api/groups/:group/discussions", function(req, res){
		db.Group.findById(req.params.group)
			.then(function(group){
				group.getDiscussions()
					.then(function(discussions){
						res.json(discussions)
					})
			});
	})

  // Get a specific discussion from a group
	app.get("/api/groups/:group/discussions/:discussion", function(req, res){
		db.Group.findById(req.params.group)
			.then(function(group){
				group.getDiscussions({where: {
					id: req.params.discussion
				}})
					.then(function(oneDiscussion){
						res.json(oneDiscussion)
					})
			});
	})

  // Create new discussion in database and associate it with a group
  app.post("/api/groups/:group/discussions", function (req, res) {
    db.Discussion.create({
      name: req.body.name,
      GroupId: req.params.group
    }).then(function (results) {
      res.json(results)
    });
  });

  // Update discussion name
  app.put("/api/groups/:group/discussions/:discussion", function(req, res){
    db.Discussion.update(
    {
    	name: req.body.name
    },
    {
      where: {
        id: req.params.discussion
      }
    }).then(function(results){
      res.json(results)
    });
  });

	// Delete discussion in database whenever a group member deletes it (don't focus on this too much. make others work first.)
	app.delete("/api/groups/:group/discussions/:discussion", function(req, res){
		db.Discussion.destroy({
      where: {
        id: req.params.discussion
      }
		}).then(function(results){
			res.json(results);
		});
	});