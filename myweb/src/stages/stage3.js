import React from "react";
import BaseStage from "./base";
import MultiChoice from "../component/multiChoice";


export default class Stage3 extends BaseStage {
    
    state = {
        stageIndex: 3
    };
    
    render() {
        return (
            <MultiChoice stageIndex={3}/>
        );
    }
}