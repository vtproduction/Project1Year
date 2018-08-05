import React from "react";
import BaseStage from "./base";
import MultiChoice from "../component/multiChoice";


export default class Stage2 extends BaseStage {
    
    state = {
        stageIndex: 2
    };
    
    render() {
        return (
            <MultiChoice stageIndex={2}/>
        );
    }
}