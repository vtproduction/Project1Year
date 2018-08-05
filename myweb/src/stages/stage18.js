import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage18 extends BaseStage {
    state = {
        stageIndex: 18
    };
    
    render() {
        return (
            <SingleChoice stageIndex={18}/>
        );
    }
}
