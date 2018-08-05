import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage11 extends BaseStage {
    state = {
        stageIndex: 11
    };
    
    render() {
        return (
            <SingleChoice stageIndex={11}/>
        );
    }
}
