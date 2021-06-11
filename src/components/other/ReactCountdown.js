import React from "react";

const ReactCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <div className="item">days: {days}</div>
        <div className="item">hours: {hours}</div>
        <div className="item">minutes: {minutes}</div>
        <div className="item">seconds: {seconds}</div>
      </div>
    </div>
  );
};

export default ReactCountdown;
