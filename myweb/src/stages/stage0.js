import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage0 extends BaseStage {
    state = {
        stageIndex: 0
    };
    
    render() {
        return (
            <SingleChoice stageIndex={0}/>
        );
    }
}
