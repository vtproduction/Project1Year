import React from "react";

import BaseStage from "./base";
import SingleChoice from "../component/singleChoice";

export default class Stage17 extends BaseStage {
    state = {
        stageIndex: 17
    };
    
    render() {
        return (
            <SingleChoice stageIndex={17}/>
        );
    }
}
