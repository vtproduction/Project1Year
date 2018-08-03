import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class WrongAnswerDialog extends Component {
    state = {
        open: false,
    };
    open = () => {
        this.setState({ open: true });
    };
    
    close = () => {
        this.setState({ open: false });
        window.location.assign('/stage0/');
    };
    
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    
    
    render() {
        return (
            <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.close}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Sai rồiiiiiiii"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Não cá vàng quá Mai ơiiiiii, buồnnnnnnnnnn =))))
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.close} color="primary">
                            Lại từ đầu nào!
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default WrongAnswerDialog;