import React, { useEffect, useState } from "react";
import "./lf-style.css";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import { async } from "q";


  
  let Strips = () => {
    return (
      <div className="strip">
        <p className="tin">time</p>
        <p className="tin">Arsenal</p>
        <p className="tin"> 6</p>
        <p className="tin">vs</p>
        <p className="tin"> 0</p>
        <p className="tin">Manchester United</p>
        <p className="tin">FT</p>
      </div>
    );
  };

  let Country = () => {
    return (
      <div>
        <h2 className="country">English Premier League</h2>
        <Strips />
        <Strips />
        <Strips />
        <Strips />
        <Strips />
        <Strips />
        <Strips />
        <Strips />
      </div>
    );
  };

  // componentDidUpdate(console.log('hello'))

  let Body = () => {
    const date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let dateNum = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (
      <div className="main">
        <Header />
        <nav
          style={{
            backgroundColor: "yellow",
            textAlign: "right",
            padding: "10px 10px"
          }}
        >
          {`${hours}:${minute}  ${days[day]}   ${dateNum}/${month}/${year}`}
        </nav>
        <div>
          <SideBar />
          <Country />
          <Country />
          <Footer />
        </div>
      </div>
    );
  }

export default Body;
