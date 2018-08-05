import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage19 extends BaseStage {
    state = {
        stageIndex: 19
    };
    
    render() {
        return (
            <SingleChoice stageIndex={19}/>
        );
    }
}
