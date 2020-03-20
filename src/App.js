import React from 'react';
import './App.css';
import DocTitleOne from "./components/customHook/DocTitileOne";
import DocTitleTwo from "./components/customHook/DocTitileOne";

function App() {
  return (
      <div className="App">
        <DocTitleOne/>
        <DocTitleTwo/>
      </div>
  );
}

export default App;
