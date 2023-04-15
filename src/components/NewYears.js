import React, { useState, useEffect } from "react";
import "../styles/NewYears.css";

function NewYears() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const target = new Date(now.getFullYear() + 1, 0, 1); // New Year's Day of next year
      const remainingTime = target - now;

      setCountdown({
        days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-container1">
      <h1>New Years Eve</h1>
      <div className="countdown-container">
        <div className="days">
          <p>{countdown.days}</p>
          <span>days</span>
        </div>
        <div className="hours">
          <p>{countdown.hours}</p>
          <span>hours</span>
        </div>
        <div className="mins">
          <p>{countdown.minutes}</p>
          <span>mins</span>
        </div>
        <div className="seconds">
          <p>{countdown.seconds}</p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}

export default NewYears;
