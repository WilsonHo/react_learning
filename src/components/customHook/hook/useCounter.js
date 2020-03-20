import {useState} from 'react';

const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);
  
  const increment = () => {
    setCount(p => p + value);
  };
  
  const decrement = () => {
    setCount(p => p - value);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return [count, increment, decrement, reset]
};

export default useCounter;
