import React, { useEffect, useState, Fragment } from "react";
import SideBar from "./SideBar";
import testing from "./Testing.css";
import Body from "./LFscoreBody";

const Testing = props => {
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
  return (
    <div className="testing">
     <div>
     {scores.map((score, index) =>
              score.map((sc, i) => (
                <Body
                  key={i}
                 
                  homeName={sc.homeName}
                  awayName={sc.awayName}
                  homeScore={sc.homeScore}
                  awayScore={sc.awayScore}
                  matchTime={sc.matchTime}
                />
              ))
            )}
     </div>
      <div className="side">
      {scores.map((score, index) =>
              score.map((sc, i) => (
                <SideBar
                  key={i}
                  leagueName={sc.leagueName}
                />
              ))
            )}
      </div>
    </div>
  );
};

export default Testing;
