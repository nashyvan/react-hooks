import React, {useRef} from 'react';

const UseRefHook = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
    } else {
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="write here..."/>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default UseRefHook;
