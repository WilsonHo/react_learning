import React, {useState, useMemo} from 'react';

const Counter = pros => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)
  
  const incrementOne = () => {
    setCounterOne(prev => prev + 1)
  }
  
  const incrementTwo = () => {
    setCounterTwo(prev => prev + 1)
  }
  
  const isEven = useMemo(() => {
    let  i = 0
    while (i < 2_000_000_000) i++
    return counterOne % 2 === 0
  }, [counterOne])
  
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter One - {counterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;
