import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import Stage0 from "./stages/stage0/stage0";
import Stage1 from "./stages/stage1/stage1"; 
import Stage2 from "./stages/stage2";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Simple SPA</h1>
            
            <div className="content">
                <Route exact path="/" component={Stage0}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/stage0" component={Stage0}/>
                <Route path="/stage1" component={Stage1}/>
                <Route path="/stage2" component={Stage2}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;