import React from "react";
import "../styles/NewYears.css";

function NewYears() {
  return (
    <div className="main-container1">
      <h1>New Years Eve</h1>
      <div className="countdown-container">
        <div className="days">
          <p>0</p>
          <span>days</span>
        </div>
        <div className="hours">
          <p>0</p>
          <span>hours</span>
        </div>
        <div className="mins">
          <p>0</p>
          <span>mins</span>
        </div>
        <div className="seconds">
          <p>0</p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}

export default NewYears;
