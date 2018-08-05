import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage9 extends BaseStage {
    state = {
        stageIndex: 9
    };
    
    render() {
        return (
            <SingleChoice stageIndex={9}/>
        );
    }
}
