import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage1 extends BaseStage {
    state = {
        stageIndex: 1
    };
    
    render() {
        return (
            <SingleChoice stageIndex={1}/>
        );
    }
}
