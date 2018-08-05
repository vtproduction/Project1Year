import React from "react";
import BaseStage from "./base";
import MultiChoice from "../component/multiChoice";


export default class Stage14 extends BaseStage {
    
    state = {
        stageIndex: 14
    };
    
    render() {
        return (
            <MultiChoice stageIndex={14}/>
        );
    }
}