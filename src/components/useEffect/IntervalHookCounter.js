import React, {useEffect, useState} from 'react';

const IntervalHookCounter = pros => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(prev => prev + 1);
  };
  
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <div>
      <h1>IntervalHookCounter: {count}</h1>
    </div>
  );
};

export default IntervalHookCounter;
