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
        stageIndex: 0,
        backToStage: 0
    };
    open = (index) => {
        
        var anchorStage = 0;
        if(index < 5) anchorStage = 0;
        else if(index >= 5 && index < 10) anchorStage = 5;
        else if(index >= 10 && index < 15) anchorStage = 10;
        else if(index >= 15 && index < 20) anchorStage = 15;
        this.setState({ open: true, stageIndex: index, backToStage: anchorStage });
    };
    
    close = () => {
        this.setState({ open: false });
        window.location.assign('#/stage'+this.state.backToStage+'/');
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
                        <Button onClick={this.close} color="secondary">
                            Quay trở lại câu số {this.state.backToStage} nhé =)))
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default WrongAnswerDialog;