import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import libraryHelpers from '../utils/libraryHelpers';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class LibraryResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleRequestClose = () => {
    this.setState({open: false});
  }
  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }    

	render() {
    const standardActions = (
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

		return (
			<div>
      	{this.props.results.map(function(search,i){
          return (
            <MuiThemeProvider muiTheme={muiTheme} className="book" key={i}>
              <div>
                <Dialog
                  open={this.state.open}
                  title="Add a Book"
                  actions={standardActions}
                  onRequestClose={this.handleRequestClose}
                  autoScrollBodyContent={true}
                >
                  <p>Test</p>
                </Dialog>
                <RaisedButton
                  label="Add a Book"
                  secondary={true}
                  onTouchTap={this.handleTouchTap}
                />
                  <p className="bookTitle">{search.title}</p>
                  <img className="bookImage" id="bookImg" src={search.link}/>
              </div>
            </MuiThemeProvider>
          )
        }.bind(this)
        )}
			</div>
		);
	}
};

export default LibraryResults;