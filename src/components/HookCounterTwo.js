import React, {useState} from 'react';

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  
  const handleResetOnclick = () =>{
    setCount(initialCount);
  };
  
  const handleIncrementOnclick = () =>{
    setCount(prev => prev + 1);
  };
  
  const handleDecrementOnclick = () =>{
    setCount(prev => prev - 1);
  };
  
  const handleIncrementFiveOnClick = () =>{
    for (let i = 0; i < 5; i++){
      setCount(prev => prev + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={handleResetOnclick}>Reset</button>
      <button onClick={handleIncrementOnclick}>Increment</button>
      <button onClick={handleDecrementOnclick}>Decrement</button>
      <button onClick={handleIncrementFiveOnClick}>Increment Five</button>

    </div>
  );
};

export default HookCounterTwo;
