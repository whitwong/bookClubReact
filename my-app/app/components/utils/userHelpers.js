import axios from 'axios';

var helper = {
	addUser: function(email,name,password){
		return axios.post('/api/users',
		{
			email: email,
			name: name,
			password: password
		});
	},
	getUsers: function(email,name,password){
		return axios.get('/api/users');
	},
}

module.exports = helper;