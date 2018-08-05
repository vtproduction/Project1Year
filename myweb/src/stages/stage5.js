import React from "react";
import BaseStage from "./base";
import MultiChoice from "../component/multiChoice";


export default class Stage5 extends BaseStage {
    
    state = {
        stageIndex: 5
    };
    
    render() {
        return (
            <MultiChoice stageIndex={5}/>
        );
    }
}