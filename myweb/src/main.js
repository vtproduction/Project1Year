import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Stage0 from "./stages/stage0";
import Stage1 from "./stages/stage1"; 
import Stage2 from "./stages/stage2";
import Stage3 from "./stages/stage3";
import Stage4 from "./stages/stage4";
import Stage5 from "./stages/stage5";
import Stage6 from "./stages/stage6";
import Stage7 from "./stages/stage7";
import Stage8 from "./stages/stage8";
import Stage9 from "./stages/stage9";
import Stage10 from "./stages/stage10";
import Stage11 from "./stages/stage11";
import Stage12 from "./stages/stage12";
import Stage13 from "./stages/stage13";
import Stage14 from "./stages/stage14";
import Stage15 from "./stages/stage15";
import Stage16 from "./stages/stage16";
import Stage17 from "./stages/stage17";
import Stage18 from "./stages/stage18";
import Stage19 from "./stages/stage19";
import Stage20 from "./stages/stage20";
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <div className="content">

                        <Route exact path="/" component={Stage0}/>
                        <Route path="/stage0" component={Stage0}/>
                        <Route path="/stage1" component={Stage1}/>
                        <Route path="/stage2" component={Stage2}/>
                        <Route path="/stage3" component={Stage3}/>
                        <Route path="/stage4" component={Stage4}/>
                        <Route path="/stage5" component={Stage5}/>
                        <Route path="/stage6" component={Stage6}/>
                        {<Route path="/stage7" component={Stage7}/>}
                        {<Route path="/stage8" component={Stage8}/>}
                        {<Route path="/stage9" component={Stage9}/>}
                        {<Route path="/stage10" component={Stage10}/>}
                        {<Route path="/stage11" component={Stage11}/>}
                        {<Route path="/stage12" component={Stage12}/>}
                        {<Route path="/stage13" component={Stage13}/>}
                        {<Route path="/stage14" component={Stage14}/>}
                        {<Route path="/stage15" component={Stage15}/>}
                        {<Route path="/stage16" component={Stage16}/>}
                        {<Route path="/stage17" component={Stage17}/>}
                        {<Route path="/stage18" component={Stage18}/>}
                        {<Route path="/stage19" component={Stage19}/>}
                        {<Route path="/stage20" component={Stage20}/>}
                        
                    </div>
                </div>
            </HashRouter>
        );
    }
}
 
export default Main;