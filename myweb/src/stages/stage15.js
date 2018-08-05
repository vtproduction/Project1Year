import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage15 extends BaseStage {
    state = {
        stageIndex: 15
    };
    
    render() {
        return (
            <SingleChoice stageIndex={15}/>
        );
    }
}
