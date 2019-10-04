import React from "react";
import "./lf-style.css";



const Body=(props)=>{

	return (
    <div>
     
			<div className="strip">
        <div className="tin one">{props.matchTime}</div>
        <div className="tin two">{props.homeName}</div>
        <div className="tin three">{props.homeScore}</div>
        <div className="tin four">vs</div>
        <div className="tin five">{props.awayScore}</div>
        <div className="tin six">{props.awayName}</div>
        <div className="tin seven">FT</div>
      </div>
      
		</div>
	);
};

export default Body;
