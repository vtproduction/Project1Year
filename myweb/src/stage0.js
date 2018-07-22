import React, { Component } from "react";
import {
    Route,
    NavLink,
    Link,
    HashRouter
} from "react-router-dom";
import data from "./data.json";
import Button from '@material-ui/core/Button'
class Stage0 extends Component {
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
        //alert('A name was submitted: ' + this.state.value);
        //this.props.history.push('./stage1')
        //this.context.router.replace('/home');
        if(this.state.value === data.data[0].answer){
            alert("tinh tinh");
        }else{
            alert("te` te`");
        }
        
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Name: {data.data[0].question}
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <Button size="small" color="primary" target="_blank">
                        Go To Course
                    </Button>
            </form>
            
        );
    }
}

export default Stage0;