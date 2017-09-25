import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const divStyle = {
	textAlign: "center"
};

class discussionCreate extends Component {
	
	// Handle submit --> push new discussion name to MySQL

	render() {
		return (
			<div style={divStyle}>
				<h2>Create a new discussion!</h2>
				<TextField hintText="Discussion Name" fullWidth={true} />
				<RaisedButton label="Submit" primary={true}/>
			</div>
		)
	}
}

export default discussionCreate;