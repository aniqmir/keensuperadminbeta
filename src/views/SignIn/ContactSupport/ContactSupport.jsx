import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    // open: false,
  };

  handleClickOpen = () => {
    this.props.handleOpen()
   };
 
   handleClose = () => {
     this.props.handleClose()
   };
 
  render() {
    return (
      <div>
        <Button  onClick={this.handleClickOpen}>
        Need Help? Contact Support
        </Button>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact Support</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Contact
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
