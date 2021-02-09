import React, { useState, useEffect } from 'react';

export default function Timer() {
// useState Hook to set default value of seconds to 0
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>{seconds} Seconds</h1>
      <button>Start Timer</button>
    </div>
  );
}