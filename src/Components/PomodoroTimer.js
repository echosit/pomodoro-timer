import React, { useState, useEffect } from 'react';

export default function Timer() {
// useState Hook to set default value of seconds to 0 and start to false
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!start && seconds !== 0){
      clearInterval(interval);
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
      <h1>{seconds} Seconds</h1>
      <button onClick={handleClick}>Start Timer</button>
    </div>
  );
}