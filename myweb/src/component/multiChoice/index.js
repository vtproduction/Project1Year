import React from "react";
import data from "../../data.json";
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WrongAnswerDialog from "../wrongAnswer";
import RightAnswerDialog from "../rightAnswer";
import './styles.css';
import BaseStage from "../../stages/base";



export default class MultiChoice extends BaseStage {
    componentDidMount(){
        this.setState({stageIndex: this.props.stageIndex})
    }
    
    render() {
        var x = this.props.stageIndex;
        return (
            <div>
                <div className="container">
                    <h1>Câu số {this.state.stageIndex}</h1>
                    <div className="content">
                        <p className="QuestionTitle">{data.data[x].question}</p>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            value={this.state.value}
                            onChange={this.handleChange}>
                                {
                                    data.data[x].answer.data.map((item, index) => (
                                        <FormControlLabel value={item} control={<Radio />} label={item} />
                                    ))
                                }
                        </RadioGroup>
                        <div className={"margin"}>
                            <Button variant="contained"  color="secondary" onClick={this.handleSubmit}>
                                    Em xin chắc chắn!
                            </Button>
                        </div>
                    </div>
                </div>
                <WrongAnswerDialog ref={this.wrongAnswerDialog}/>
                <RightAnswerDialog ref={this.rightAnswerDialog} title="Yeahhh" content="Yoooo" next={x + 1}/>
            </div>

        );
    }
}