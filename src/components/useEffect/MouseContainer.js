import React, {useState} from 'react';
import HookMouse from "./HookMouse";

const MouseContainer = pros => {
  const [display, setDisplay] = useState(true);
  
  const handleDisplayOnclick = () =>{
    setDisplay(!display)
  };
  
  return (
    <div>
      <button onClick={handleDisplayOnclick}>Toggle Display</button>
      {display && <HookMouse/>}
    </div>
  );
};

export default MouseContainer;
