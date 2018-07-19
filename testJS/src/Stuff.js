import React, { Component } from "react";
import {
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
 
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <button className="button delete-post" onClick={() => {
            // ... delete post
            // then redirect, without page reload, by triggering a hidden Link
            document.querySelector('.trigger.go-home').click();
        }}>Delete Post</button>

        <Link to="/contact" className="trigger go-home hidden"></Link>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;