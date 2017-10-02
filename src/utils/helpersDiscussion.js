import axios from "axios";

const helpersDiscussion = {
	// Read all current discussions in database and display on discussions.html
	getGroupDiscussions: function(){
		return axios.get("/api/group/discussions")
			.then(function(results){
				return results;
			})
	},

	// Get a specific Group's discussions
	getDiscussionsOfGroup: function(groupId){
	  return axios.get("/api/groups/"+groupId+"/discussions")
	    .then(function(results){
			console.log(results);
	        return results;
	    })
	},

	// Get a specific discussion from a group
	getOneDiscussion: function(groupId, discussionId){
	  return axios.get("/api/groups/"+groupId+"/discussions/"+discussionId)
	    .then(function(results){
	        return results;
	    })
	},

	// Create a discussion in database
	createDiscussion: function(groupId, discName){
	  return axios.post("/api/groups/"+groupId+"/discussions", {name: discName})
	    .then(function(results){
	        return results;
	    })
	},

	// Update discussion name
	updateDiscussionName: function(groupId, discussionId){
	  return axios.put("/api/groups/"+groupId+"/discussions/"+discussionId)
	    .then(function(results){
	        return results;
	    })
	},

	// Delete discussion in database whenever a group member deletes it
	deleteDiscussion: function(groupId, discussionId){
	    return axios.delete("/api/groups/"+groupId+"/discussions/"+discussionId)
	}

}

export default helpersDiscussion;