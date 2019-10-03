import React, { useEffect, useState, Fragment } from "react";
import Body from "./LFscoreBody";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Date from "./Body";

import Loading from "./loading";

const App = () => {
  const [scores, Setscores] = useState([]);
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    Setloading(!loading);
    await fetch("https://secure-lake-56026.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Setscores([data.data]);
        if (data) {
          Setloading(false);
        }
      });
  };
  console.log(scores);
  //  date = new Date();
  //  hours = date.getHours();
  // minute = date.getMinutes();
  //  day = date.getDay();
  // days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ];
  // let date = new Date();

  return (
    <Fragment>
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : (
        <div>
          <Header />

          {scores.map((score, index) =>
            score.map((sc, i) => (
              <SideBar
                key={i}
                style={{ marginLeft: "30px", color: "white" }}
                leagueName={sc.leagueName}
              />
            ))
          )}

          {scores.map((score, index) =>
            score.map((sc, i) => (
              <Body
                key={i}
                style={{ marginLeft: "30px", color: "white" }}
                homeName={sc.homeName}
                awayName={sc.awayName}
                homeScore={sc.homeScore}
                awayScore={sc.awayScore}
                matchTime={sc.matchTime}
              />
            ))
          )}
          <Footer />
        </div>
      )}
    </Fragment>
  );
};
export default App;
