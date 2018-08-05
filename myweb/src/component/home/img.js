import React, { Component } from "react";
import "./styles.css";

export default class Item extends Component{

    handleClick = () => {
        if(this.props.action)
            window.location.assign('/#/stage0/');
    };
     
    render() {
        return (
            <img src={this.props.src} alt={this.props.src} className="img"
                onClick={this.handleClick}/>
        );
    }
}