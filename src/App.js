import React from 'react';
import './App.css';

import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterFour from "./components/useState/HookCounterFour";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HookCounterOne from "./components/useEffect/HookCounterOne";
function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <ClassCounterOne/>
      <HookCounterOne/>
    </div>
  );
}

export default App;
