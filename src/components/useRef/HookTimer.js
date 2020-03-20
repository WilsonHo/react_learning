import React, {useEffect, useRef, useState} from 'react';

const HookTimer = pros => {
  const [timer, setTimer] = useState(0);
  
  const intervalRef = useRef();
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    };
  }, []);
  
  
  return (
    <div>
      Hook Timer {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  );
};

export default HookTimer;
