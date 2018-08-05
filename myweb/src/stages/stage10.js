import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage10 extends BaseStage {
    state = {
        stageIndex: 10
    };
    
    render() {
        return (
            <SingleChoice stageIndex={10}/>
        );
    }
}
