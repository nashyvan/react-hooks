import React, {useContext} from 'react';
import {AppContext} from "./UseContextHook";

const Login = () => {
  const {setUsername} = useContext(AppContext);

  return (
    <div>
      <input onChange={(event) => {
        setUsername(event.target.value);
      }} type="text"/>
    </div>
  );
};

export default Login;
