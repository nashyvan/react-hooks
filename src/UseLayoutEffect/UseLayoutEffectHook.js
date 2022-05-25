import React, {useEffect, useLayoutEffect, useRef} from 'react';

const UseLayoutEffectHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "Second Value";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="First value" type="text"/>
    </div>
  );
};

export default UseLayoutEffectHook;
