import React from 'react';
import useCounter from "./hook/useCounter";

const CounterOne = pros => {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  
  return (
    <div>
      <h3>Count = {count}</h3>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterOne;
