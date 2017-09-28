import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import helpers from './utils/helpersDiscussion';

const divStyle = {
    textAlign: "center"
};

class discussionCreate extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        discName: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    helpers.createDiscussion(1, this.state.discName).then(function(){
        console.log("Discussion Created")
    })
  }

  handleFormChange = (event) => {
    var newState={};
    newState[event.target.id]=event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div style={divStyle}>
        <h2>Create a new discussion!</h2>
        <TextField hintText="Discussion Name" fullWidth={true} onSubmit={(event) => this.createDisc(event)} />
        <RaisedButton label="Submit" type="submit" primary={true} />
        <TextField 
          value={this.state.discName}
          type="text"
          placeholder="Add Discussion"
          id="discName"
          onChange={this.handleFormChange}
          fullWidth={true}
          onSubmit={(event) => this.handleSubmit(event)}
         />
        <RaisedButton label="Submit" type="submit" primary={true} onClick={this.handleSubmit}/>
      </div>
    )
  }
}