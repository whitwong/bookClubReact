import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Signup extends Component {
  // Here we render the function
  render() {
    return (
      <div className="body">
        <div className="row">
          <div className="col s3"></div>
          <div className="col s6">
            <div className="login">
              <h2>Sign up</h2>
              <form action="/api/users" method="post">
                <div>
                  <label>Email:</label>
                  <input type="text" name="username"/>
                </div>
                <div>
                  <label>Name:</label>
                  <input type="text" name="name"/>
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" name="password"/>
                </div>
                <div>
                  <button type="submit">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

// Export the component back for use in other files
export default Signup;