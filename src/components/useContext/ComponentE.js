import React, {useContext} from 'react';
import ComponentF from "./ComponentF";
import {UserContext} from "../../App";

const ComponentE = pros => {
  const  user = useContext(UserContext);
  return (
    <div>
      {user}
      {/*<ComponentF/>*/}
    </div>
  );
};

export default ComponentE;
