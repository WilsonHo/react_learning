import React, {useEffect, useState} from 'react';

const HookMouse = pros => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const logMousePosition = (e) => {
    console.log('Mouse Event');
    setX(e.clientX);
    setY(e.clientY);
  };
  
  useEffect(() => {
    console.log('Use Effect called');
    window.addEventListener('mousemove', logMousePosition)
  }, []);
  
  
  return (
    <div>
      Hook X - {x} T - {y}
    </div>
  );
};

export default HookMouse;
