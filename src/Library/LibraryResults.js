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
      modalTitle:"",
      modalAuthor:"",
      modalRating:"",
      modalDescription: ""
    };
  }
  handleRequestClose = () => {
    this.setState({open: false});
  }
  handleTouchTap = (event) => {
    this.setState({
      open: true,
    });
    console.log("Modal Title: "+event.target.id);
    libraryHelpers.modalInfo(event.target.id).then(function(response){
      // console.log("response ", require("util").inspect(response,{depth:null}));
        // console.log(response.title);
      this.setState({
        modalTitle: response.title,
        modalAuthor: response.author,
        modalRating: response.rating,
        modalDescription: response.description
      })
    }.bind(this))
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
            <MuiThemeProvider muiTheme={muiTheme} key={i}>
              <div className="book">
                <Dialog
                  open={this.state.open}
                  actions={standardActions}
                  onRequestClose={this.handleRequestClose}
                  autoScrollBodyContent={true}
                >
                  <h3>{this.state.modalTitle}</h3>
                  <h4>{this.state.modalAuthor}</h4>
                  <h4>Rating: {this.state.modalRating}/5</h4>
                  <p>Summary: {this.state.modalDescription}</p>

                </Dialog>
                <div
                  onTouchTap={this.handleTouchTap}
                >
                  <p className="bookTitle">{search.title}</p>
                  <img className="bookImage" id={search.title} src={search.link}/>
                </div>
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