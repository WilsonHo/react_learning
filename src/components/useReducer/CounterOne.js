import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
  
  // eslint-disable-next-line default-case
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Component = pros => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {state}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default Component;
