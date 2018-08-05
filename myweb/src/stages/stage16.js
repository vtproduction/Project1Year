import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage16 extends BaseStage {
    state = {
        stageIndex: 16
    };
    
    render() {
        return (
            <SingleChoice stageIndex={16}/>
        );
    }
}
