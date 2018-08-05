import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage20 extends BaseStage {
    state = {
        stageIndex: 20
    };
    
    render() {
        return (
            <SingleChoice stageIndex={20}/>
        );
    }
}
