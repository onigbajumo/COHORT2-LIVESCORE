import React, { Component } from "react";
import logo from "./img/lf.svg";

class Header extends Component {
  
  render() {
    return (
      <main className="header">
        <div className="logoheader">
          <img src={logo} className="logo" alt=""/>
          <h2>
            {" "}
            <span>LearnFactory</span> Scores{" "}
          </h2>
        </div>

        <div className="list">
          <a> Predict </a>
          <a> Contact </a>
          <a> About </a>
          <a> Services </a>
        </div>
    
      </main>
    );
  }
}
export default Header;
