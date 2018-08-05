import React, { Component } from "react";
import Slideshow from "react-slidez";
import "./styles.css"
import Item from "./img";

export default class Home extends Component{
    render() {
        return (
            <Slideshow
                showArrows
                autoplay='fasle'
                defaultIndex={0}
                effect={'fade'}
                showIndex="false"
                height={'100%'}
                slideInterval={'100000'}
                width={'100%'}>
                <Item src="assets/p1.png"/>
                <Item src="assets/p2.png"/>
                <Item src="assets/p3.png" action="true"/>
            </Slideshow>
        );
    }
}