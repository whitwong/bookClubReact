import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Discussion from './Discussion';
import GroupCards from './GroupCards.js';

class Group extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  groups: [],
		};
	
		this.loadGroups = this.loadGroups.bind(this);
	  }

	  loadGroups() {
		  groupHelpers.getGroups().then((data) => {
				console.log(data);
			  this.setState({groups: data})
		  })
	  }



	render() {
		return (
			<div className="wrapper">
				<div className="row">
					{/*Group Section*/}
					<div className="col s7 group">
						<GroupCards groups={this.state.groups} />
					</div>

					{/*Discussion Section*/}
					<div className="col s5 discussion">
						<Discussion />
					</div>
				</div>
			</div>
		)
	}

}

export default Group;