import React, {useEffect, useState} from 'react';

const HookCounterOne = pros => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`
  });
  
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
