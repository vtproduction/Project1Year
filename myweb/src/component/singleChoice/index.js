import React from "react";
import data from "../../data.json";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import WrongAnswerDialog from "../wrongAnswer";
import RightAnswerDialog from "../rightAnswer";
import './styles.css';
import BaseStage from "../../stages/base";
export default class SingleChoice extends BaseStage {
    componentDidMount(){
        this.setState({stageIndex: this.props.stageIndex})
        var x = data.data[this.props.stageIndex]
        if(x.metadata !== undefined){
            this.setState({showImg: true, src: x.metadata.img})
        }else{
            this.setState({showImg: false})
        }
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Câu số {this.state.stageIndex}</h1>
                    <div className="content">
                        <img src={"/assets/"+this.state.src}  className={this.state.showImg ? "showImg" : "hideImg"}/>
                        <p className="QuestionTitle">{data.data[this.state.stageIndex].question}</p>
                        <FormControl fullWidth className={"margin"}>
                            <TextField
                                id="with-placeholder"
                                placeholder={data.data[this.state.stageIndex].placeholder}
                                onChange={this.handleChange}
                                className="EditText"
                                margin="normal"/>
                        </FormControl>
                        <FormControl fullWidth className={"margin"}>
                            <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                                Câu này quá dễ!
                            </Button>
                        </FormControl>
                        
                    </div>
                </div>
                <WrongAnswerDialog ref={this.wrongAnswerDialog}/>
                <RightAnswerDialog ref={this.rightAnswerDialog} title="Yeahhh" content="Yoooo" next={this.props.stageIndex + 1}/>
            </div>
        );
    }
}