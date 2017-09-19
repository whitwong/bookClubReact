import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}



  // <div id="modal1" class="modal">
  //   <div class="modal-content">
  //     <form>
  //       <label for="title">Title</label>
  //       <input type="text" id="title">
  //       <label for="author">Author</label>
  //       <input type="text" id="author">       
  //       <label for="comments">Comments</label>
  //       <input type="text" id="comments">
  //     </form>
  //   </div>
  //   <div class="modal-footer">
  //     <a href="#!" class="modal-action modal-close btn-flat"  id="bookSubmit">Add</a>
  //   </div>
  // </div>