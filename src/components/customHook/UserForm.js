import React, {useState} from 'react';
import useInput from "./hook/useInput";

const UserForm = pros => {
  const [firstName, fBind, fReset] = useInput('');
  const [lastName, lBind, lReset] = useInput('');
  
  
  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    fReset();
    lReset();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name: </label>
          <input type="text" {...fBind}/>
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" {...lBind}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
