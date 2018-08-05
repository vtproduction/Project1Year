import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import data from "../../rightAnswer.json";
import "./styles.css";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RightAnswerDialog extends Component {
    state = {
        open: false,
        title: '',
        content: '',
        next: 0
    };
    open = () => {
        this.setState({ open: true });
    };
    
    close = () => {
        this.setState({ open: false });
        if(this.state.next == 21){
            window.location.assign('/#/reward');
        }else{
            window.location.assign('/#/stage'+this.state.next+'/');
        }
        
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
                        {data.data[this.state.next - 1].answer}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {data.data[this.state.next - 1].placeholder}
                            <img src={data.data[this.state.next - 1].metadata !== undefined ? 
                                "/assets/"+data.data[this.state.next - 1].metadata.img : ""} 
                                className={data.data[this.state.next - 1].metadata !== undefined ? "showImg" : "hideImg"}/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.close} color="primary">
                            {this.state.next == 21 ? "Nhận thưởng thoyyy" : "Câu tiếp nàoooo!!!!"}
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default RightAnswerDialog;