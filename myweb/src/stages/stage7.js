import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage7 extends BaseStage {
    state = {
        stageIndex: 7
    };
    
    render() {
        return (
            <SingleChoice stageIndex={7}/>
        );
    }
}
