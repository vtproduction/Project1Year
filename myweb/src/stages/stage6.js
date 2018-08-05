import React from "react";
import BaseStage from "./base";
import MultiChoice from "../component/multiChoice";


export default class Stage6 extends BaseStage {
    
    state = {
        stageIndex: 6
    };
    
    render() {
        return (
            <MultiChoice stageIndex={6}/>
        );
    }
}