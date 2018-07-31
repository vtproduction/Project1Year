import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from "@material-ui/core/FormControl";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RightAnswerDialog extends Component {
    state = {
        open: false,
        title: '',
        content: '',
        next: ''
    };
    open = () => {
        this.setState({ open: true });
    };
    
    close = () => {
        this.setState({ open: false });
        window.location.assign('/#/'+this.state.next+'/');
    };
    
    
    constructor(props) {
        super(props);
        this.state = {value: '', title: props.title, content: props.content, next: props.next};
    
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
                        {this.state.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.state.content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.close} color="primary">
                            Câu tiếp nàooos!
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default RightAnswerDialog;