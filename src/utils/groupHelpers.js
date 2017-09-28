import axios from 'axios';

const groupHelpers = {

	// Get a user's groups and discussions
	getGroups: () => {
		return axios.get('/api/groups/discussions')
			.then((response) => {
				return response;
			})
	},

	createGroup: (name) => {
		return axios.post('/api/groups', { name: name})
		.then((response) => {
			return response
		})
	},




}

// Export the API helper
export default groupHelpers;



