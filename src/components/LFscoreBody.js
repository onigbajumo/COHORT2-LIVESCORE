import React from "react";
import "./lf-style.css";



const Body=(props)=>{

	return (
    <div>
     
			<div className="strip">
        <p className="tin">{props.matchTime}</p>
        <p className="tin">{props.homeName}</p>
        <p className="tin">{props.homeScore}</p>
        <p className="tin">vs</p>
        <p className="tin">{props.awayScore}</p>
        <p className="tin">{props.awayName}</p>
        <p className="tin">FT</p>
      </div>
      
		</div>
	);
};

export default Body;
