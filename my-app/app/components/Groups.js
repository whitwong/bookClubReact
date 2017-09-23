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

class Group extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="row">
					{/*Group Section*/}
					<div className="col s7 group">Groups
					</div>

					{/*Discussion Section*/}
					<div className="col s5 discussion">Discussions
					</div>
				</div>
			</div>
		)
	}

}

export default Group;