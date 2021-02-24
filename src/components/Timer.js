import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState(false);
  const [button, setButton] = useState("Start");

  //add 1 to seconds after second
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      setButton("Pause"); //set button to pause when timer is running
    } else if (!start && seconds !== 0){
      clearInterval(interval); //pause timer
      setButton("Start"); //set button to start when timer is inactive
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, seconds]);

  //start timer when button is clicked
  function handleClick() {
    setStart(!start);
  }

  //Reset value of seconds to 0 after 60 and add 1 to minutes
  if (seconds === 60) {
    setSeconds(0);
    setMinutes(minutes + 1); 
  }
  //Reset value of minutes to 0 after 60 and add 1 to hours
  if (minutes === 60) {
    setMinutes(0);
    setHours(hours + 1);
  }

  //Pomodoro Time Interval
  let pomodoro = 20;  
  if (minutes === pomodoro) {
    setMinutes(0); //sets minutes 
    setStart(false); //stops timer
    setButton("Start"); //button is on Start
  } 
  
  return (
    <div>
      <h1>Pomodoro: {pomodoro} minutes</h1>
      <h1>{ hours < 10 && '0' }{hours}:{ minutes < 10 && '0' }{minutes}:{ seconds < 10 && '0' }{seconds}</h1>
      <button onClick={handleClick}>{button}</button>
    </div>
  );
}