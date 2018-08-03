import React, { Component } from "react";
import data from "../data.json";
class BaseStage extends Component {
    state = {
        open: false,
        stageIndex: 0,
        value: ''
    };
    
    
    constructor(props) {
        super(props);
        this.wrongAnswerDialog = React.createRef();
        this.rightAnswerDialog = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        if(this.state.value === undefined) return;
        var question = data.data[this.state.stageIndex];
        var isMultiChoice = question.multichoice;
        var answer = isMultiChoice ? question.answer.data[question.answer.result] : question.answer;
        if(this.state.value.toLowerCase() === answer.toLowerCase()){
            this.rightAnswerDialog.current.open();
        }else{
            this.wrongAnswerDialog.current.open();
        }
        event.preventDefault();
    }
    
    
}

export default BaseStage;