import React, {useEffect, useRef} from 'react';

const FocusInput = pros => {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
    <input ref={inputRef} type="text"/>
    </div>
  );
};

export default FocusInput;
