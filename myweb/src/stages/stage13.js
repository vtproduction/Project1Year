import React from "react";
import BaseStage from "./base";
import MultiChoice from "../component/multiChoice";


export default class Stage13 extends BaseStage {
    
    state = {
        stageIndex: 13
    };
    
    render() {
        return (
            <MultiChoice stageIndex={13}/>
        );
    }
}