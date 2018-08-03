import React from "react";
import data from "../../data.json";
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WrongAnswerDialog from "../../component/wrongAnswer";
import RightAnswerDialog from "../../component/rightAnswer";
import "./styles.css";
import BaseStage from "../BaseStage";



export default class Stage14 extends BaseStage {
    state = {
        stageIndex: 14,
    };
    
    
    render() {
        return (
            <div>
                <p className="QuestionTitle">{data.data[this.state.stageIndex].question}</p>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    value={this.state.value}
                    onChange={this.handleChange}>
                        {
                            data.data[this.state.stageIndex].answer.data.map((item, index) => (
                                <FormControlLabel value={item} control={<Radio />} label={item} />
                            ))
                        }
                </RadioGroup>
                <div className={"margin"}>
                    <Button variant="contained"  color="secondary" onClick={this.handleSubmit}>
                            Em xin chắc chắn!
                    </Button>
                </div>
                <WrongAnswerDialog ref={this.wrongAnswerDialog}/>
                <RightAnswerDialog ref={this.rightAnswerDialog} title="Yeahhh" content="Yoooo" next={this.state.stageIndex + 1}/>
            </div>
        );
    }
}
