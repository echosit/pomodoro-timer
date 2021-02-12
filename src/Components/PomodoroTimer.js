import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [start, setStart] = useState(false);
  const [button, setButton] = useState("Start");

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      setButton("Pause");
    } else if (!start && seconds !== 0){
      clearInterval(interval);
      setButton("Start");
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, seconds]);

  function handleClick() {
    setStart(!start);
  }

  return (
    <div>
      <h1>{minutes}:{seconds} Seconds</h1>
      <button onClick={handleClick}>{button}</button>
    </div>
  );
}