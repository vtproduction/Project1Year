import React, { Component } from "react";
import data from "../../data.json";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from "@material-ui/core/FormControl";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import WrongAnswerDialog from "../../component/wrongAnswer";
import RightAnswerDialog from "../../component/rightAnswer";
import "./styles.css";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Stage2 extends Component {
    state = {
        open: false,
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        /* if(this.state.value.toLowerCase() === data.data[1].answer.toLowerCase()){
            this.handleClickOpen();
        }else{
            alert("Sai rồiiiiiiiiiiii");
        } */
        console.log(">" + this.state.value);
        this.handleClickOpen();
        event.preventDefault();
    }
    
    render() {
        
        
        return (
            <div>
                <p className="QuestionTitle">{data.data[2].question}</p>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    
                    value={this.state.value}
                    onChange={this.handleChange}>
                        {
                            data.data[2].answer.data.map((item, index) => (
                                <FormControlLabel value={item} control={<Radio />} label={item} />
                            ))
                        }
                </RadioGroup>
                <div className={"margin"}>
                    <Button variant="contained"  color="secondary" onClick={this.handleSubmit}>
                            Em xin chắc chắn!
                    </Button>
                </div>
                
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Chuẩn rồiiiiiii"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <img src={process.env.PUBLIC_URL + 'assets/IMG_3652.PNG'} className="image"/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Câu tiếp theo nào
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Stage2;