import React, { Component } from 'react';

import libraryHelpers from '../utils/libraryHelpers';
import userHelpers from '../utils/userHelpers';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      author: "",
      notes: "",
      results: "",
      userId: ""
    };

    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    userHelpers.getUser(this.state.profile.email)
    .then((result) => {
      this.setState({
        userId: result
      })
    })
  }

  componentDidMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile }, this.getUser());
      });
    } else {
      this.setState({ profile: userProfile }, this.getUser());
    }
  }


  handleRequestClose = () => {
    this.setState({ open: false });
    libraryHelpers.saveBook(this.state.title, this.state.author, this.state.comments).then(function () {
      console.log("Saved Book");
    })
    libraryHelpers.bookSearch(this.state.title).then(function (data) {
      console.log(data);
      this.setState({
        results: data
      });
    }.bind(this))
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleChange = (event) => {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }


  // Here we render the function
  render() {
    const standardActions = (
      <FlatButton
        label="Add"
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
                  autoScrollBodyContent={true}
                >
                  <input
                    value={this.state.title}
                    type="text"
                    className="form-control text-left"
                    placeholder="Title"
                    id="title"
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    value={this.state.author}
                    type="text"
                    className="form-control text-left"
                    placeholder="Author"
                    id="author"
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    value={this.state.comments}
                    type="text"
                    className="form-control text-left"
                    placeholder="Comments"
                    id="notes"
                    onChange={this.handleChange}
                    required
                  />
                </Dialog>
                <RaisedButton
                  label="Add a Book"
                  secondary={true}
                  onTouchTap={this.handleTouchTap}
                />
              </div>
            </MuiThemeProvider>
            <div>{this.state.results}</div>

          </div>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Library;