import React, { Component } from "react";
import {
    Route,
    NavLink,
    Link,
    HashRouter
} from "react-router-dom";
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
import WrongAnswerDialog from "../../component/wrongAnswer";
import RightAnswerDialog from "../../component/rightAnswer";
import './styles.css';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class BaseStage extends Component {
    state = {
        open: false,
    };
    
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.wrongAnswerDialog = React.createRef();
        this.rightAnswerDialog = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        if(this.state.value.toLowerCase() === data.data[0].answer.toLowerCase()){
            this.rightAnswerDialog.current.open();
        }else{
            this.wrongAnswerDialog.current.open();
        }
        event.preventDefault();
    }
    
    
}

export default BaseStage;