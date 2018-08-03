import React from "react";
import data from "../../data.json";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import WrongAnswerDialog from "../../component/wrongAnswer";
import RightAnswerDialog from "../../component/rightAnswer";
import './styles.css';
import BaseStage from "../BaseStage";
import img from "../../assets/IMG_5084.JPG";


export default class Stage9 extends BaseStage {
    state = {
        stageIndex: 9
    };
    
    render() {
        return (
            <div>
                <p className="QuestionTitle">{data.data[this.state.stageIndex].question}</p>
                <img src={img} alt="" className={"img"}/>
                <FormControl fullWidth className={"margin"}>
                    <TextField
                        id="with-placeholder"
                        placeholder="Placeholder"
                        onChange={this.handleChange}
                        className="EditText"
                        margin="normal"/>
                </FormControl>
                <FormControl fullWidth className={"margin"}>
                    <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                        Câu này quá dễ!
                    </Button>
                </FormControl>
                <WrongAnswerDialog ref={this.wrongAnswerDialog}/>
                <RightAnswerDialog ref={this.rightAnswerDialog} title="Yeahhh" content="Yoooo" next={this.state.stageIndex + 1}/>
            </div>
        );
    }
}