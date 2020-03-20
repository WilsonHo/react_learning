import React, {useState} from 'react';
import useDocumentTitle from "./hook/useDocumentTitle";

const DocTitleTwo = pros => {
  const [count, setCount] = useState(0);
  
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(p => p + 1)}>Count - {count}</button>
    </div>
  );
};

export default DocTitleTwo;
