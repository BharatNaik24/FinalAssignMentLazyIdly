import React from "react";
import "./index.css";

const ListItems = (props) => {
  const { listDetails } = props;
  const { serialNo, name, time } = listDetails;

  return (
    <div className="adjustCon">
      <li className="main_container">
        <div className="serialNameContainer1">
          <h1 className="heading">{serialNo}</h1>
          <h2 className="nameV">{name}</h2>
        </div>
        <div className="time">{time}</div>
      </li>
    </div>
  );
};

export default ListItems;
