import React, {useState} from 'react';
import useDocumentTitle from "./hook/useDocumentTitle";

const DocTitleOne = pros => {
  const [count, setCount] = useState(0);
  
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(p => p + 1)}>Count - {count}</button>
    </div>
  );
};

export default DocTitleOne;
