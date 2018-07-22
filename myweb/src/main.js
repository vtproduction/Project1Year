import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import Stage0 from "./stage0";
 
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
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;