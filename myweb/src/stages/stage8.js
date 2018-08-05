import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage8 extends BaseStage {
    state = {
        stageIndex: 8
    };
    
    render() {
        return (
            <SingleChoice stageIndex={8}/>
        );
    }
}
