import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage12 extends BaseStage {
    state = {
        stageIndex: 12
    };
    
    render() {
        return (
            <SingleChoice stageIndex={12}/>
        );
    }
}
