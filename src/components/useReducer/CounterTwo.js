import React, {useReducer} from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};

const reducer = (state, action) => {
  
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'increment':
      return {...state, firstCounter: state.firstCounter + action.value};
    case 'decrement':
      return {...state, firstCounter: state.firstCounter - action.value};
    case 'increment2':
      return {...state, secondCounter: state.secondCounter + action.value};
    case 'decrement2':
      return {...state, secondCounter: state.secondCounter - action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = pros => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {state.firstCounter} # Count - {state.secondCounter}</h1>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment 1</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement 1</button>
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
      <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
};

export default CounterTwo;
