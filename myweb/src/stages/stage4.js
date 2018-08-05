import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage4 extends BaseStage {
    state = {
        stageIndex: 4
    };
    
    render() {
        return (
            <SingleChoice stageIndex={4}/>
        );
    }
}
