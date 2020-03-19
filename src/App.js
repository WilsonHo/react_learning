import React, {useReducer} from 'react';
import './App.css';

// import ClassCounter from "./components/useState/ClassCounter";
// import HookCounter from "./components/useState/HookCounter";
// import HookCounterTwo from "./components/useState/HookCounterTwo";
// import HookCounterThree from "./components/useState/HookCounterThree";
// import HookCounterFour from "./components/useState/HookCounterFour";
// import ClassCounterOne from "./components/useEffect/ClassCounterOne";
// import HookCounterOne from "./components/useEffect/HookCounterOne";
// import ClassMouse from "./components/useEffect/ClassMouse";
// import HookMouse from "./components/useEffect/HookMouse";
// import MouseContainer from "./components/useEffect/MouseContainer";
// import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
// import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
// import DataFetching from "./components/useEffect/DataFetching";
// import ComponentC from "./components/useContext/ComponentC";
// import CounterThree from "./components/useReducer/CounterThree";
import ComponentA from "./components/useReducer/context/ComponentA"
import ComponentB from "./components/useReducer/context/ComponentB"
import ComponentC from "./components/useReducer/context/ComponentC"

export const CountContext = React.createContext();

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

// const Counte

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    
    
      </div>
    </CountContext.Provider>
  );
}

export default App;
