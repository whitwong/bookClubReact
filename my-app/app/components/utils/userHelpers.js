import axios from 'axios';

var helper = {
	addUser: function(email,name,password){
		console.log("attempting to add user - BROWSER");
		var newUser={
			email: email,
			name: name,
			password: password
		};
		console.log(newUser);
		return axios.post('/api/users',newUser);
	},
	getUsers: function(email,name,password){
		return axios.get('/api/users');
	},
}

module.exports = helper;