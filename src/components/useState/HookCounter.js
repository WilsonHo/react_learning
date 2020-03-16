import React, {useState} from 'react';


const HookCounter = pros => {
  const [count, setCount] = useState(0);
  
  const handleOnClick = () => {
    setCount(count + 1)
  };
  
  return (
    <div>
      <button onClick={handleOnClick}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
