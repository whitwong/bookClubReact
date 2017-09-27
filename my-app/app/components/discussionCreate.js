import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const divStyle = {
	textAlign: "center"
};

class discussionCreate extends Component {
	constructor(props){
		super(props);
		this.createDisc = this.createDisc.bind(this);
	}
	// Handle submit --> push new discussion name to MySQL

	// Get group ID to add reference to discussions
	createDisc(event){
		event.preventDefault();
		this.props.addChat({message: message, name: name});
	}

	render() {
		return (
			<div style={divStyle}>
				<h2>Create a new discussion!</h2>
				<TextField hintText="Discussion Name" fullWidth={true} onSubmit={(event) => this.createDisc(event)} />
				<RaisedButton label="Submit" type="submit" primary={true} />
			</div>
		)
	}
}

export default discussionCreate;