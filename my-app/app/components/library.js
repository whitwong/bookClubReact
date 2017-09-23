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


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Library extends Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }


  // Here we render the function
  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <div className="wrapper">
        <div className="row">
          <div className="col s3 about">
            <div className="row personalInfo">
              <h2 id="personalName">Username</h2>
              <p id="personalFavorite">Favorite Book: The Power of One</p>
              <p id="personalCurrent">"Currently Reading: You Dont Know JS"</p>
            </div>
          </div>
          <div className="col s9 bookList">
          <h2>Bookshelf</h2>
            <MuiThemeProvider muiTheme={muiTheme}>
              <div>
                <Dialog
                  open={this.state.open}
                  title="Add a Book"
                  actions={standardActions}
                  onRequestClose={this.handleRequestClose}
                >
                  1-2-3-4-5
                </Dialog>
                <RaisedButton
                  label="Add a Book"
                  secondary={true}
                  onTouchTap={this.handleTouchTap}
                />
              </div>
            </MuiThemeProvider>
            <div id="tableLibrary"></div>
          </div>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Library;