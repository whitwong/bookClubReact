import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LibraryResults from './LibraryResults';
import libraryHelpers from '../utils/libraryHelpers';

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
      notes:"",
      results:[],
      user: "",
      email: null
    };

    this.getUser = this.getUser.bind(this);
  }

  // Use state.email from Auth0 to get MySQL user or create new user. Store user in state.user
  getUser() {
    userHelpers.getUser(this.state.email)
    .then((result) => {
      this.setState({
        user: result.data
      });
    })
  }

  // Get the user profile from Auth0. Store the email in state.email
  componentDidMount() {
    let self = this;
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ email: profile.email }, self.getUser);
      });
    } else {
      this.setState({ email: userProfile.email }, self.getUser);
    }
  }


  handleRequestClose = () => {
    this.setState({open: false});
    libraryHelpers.getBookImageTitle(this.state.title).then(function(data){
      // console.log("Data ",require("util").inspect(data, {depth:null}))
      libraryHelpers.saveBook(data.returnedTitle, data.returnedAuthor, this.state.comments, data.returnedLink);
      libraryHelpers.showBooks().then(function(response){
        console.log("newBook ",require("util").inspect(response, {depth:null}));
        this.setState({
          results: response.data
        })
      }.bind(this))
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
          <div className="col-sm-3 about">
            <div className="row personalInfo">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Username</h3>
                </div>
                <div className="panel-body">
                  <p id="personalFavorite">Favorite Book: The Power of One</p>
                  <p id="personalCurrent">"Currently Reading: You Dont Know JS"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-9 bookList">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Bookshelf</h3>
              </div>
              <div className="panel-body"> 
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
                        id="comments"
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
                <div>
                  <LibraryResults results={this.state.results}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Library;