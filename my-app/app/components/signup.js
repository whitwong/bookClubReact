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
import helpers from './utils/userHelpers';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    var newState={};
    newState[event.target.id]=event.target.value;
    this.setState(newState);
  }

  handleSubmit=()=>{
    event.preventDefault();
    helpers.addUser(this.state.email, this.state.username, this.state.password).then(function(){
      console.log("User Added");
    }.bind(this))
  }
  // Here we render the function
  render() {
    return (
      <div className="body">
        <div className="row">
          <div className="col s3"></div>
          <div className="col s6">
            <div className="login">
              <h2>Sign up</h2>
              <MuiThemeProvider muiTheme={muiTheme}>
                <form>
                  <div>
                    <label>Email:</label>
                    <input 
                      value={this.state.email}
                      type="text" 
                      className="form-control text-left"
                      id="email"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Name:</label>
                    <input
                      value={this.state.username}
                      type="text"
                      className="form-control text-left" 
                      id="username"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input 
                      value={this.state.password}
                      type="password"
                      className="form-control text-left" 
                      id="password"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div>
                    <RaisedButton
                      label="Signup"
                      secondary={true}
                      onTouchTap={this.handleSubmit}
                    />
                  </div>
                </form>
              </MuiThemeProvider>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

// Export the component back for use in other files
export default Signup;