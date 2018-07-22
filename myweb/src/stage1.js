import React, { Component } from "react";
import {
    Route,
    NavLink,
    Link,
    HashRouter
} from "react-router-dom";


class Stage1 extends Component {
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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
            
            <div>
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>
            
            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
            
        );
    }
}

export default Stage1;