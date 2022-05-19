import React, {useState} from 'react';

const UseStateHook = () => {
  // The First Example
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  // The Second Example
  const [inputValue, setInputValue] = useState("Default State");

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue)
  }

  return (
    <div className="usestate">
      <div className="usestate__first">
        <h3>{counter}</h3>
        <button onClick={increment}>Increment</button>
      </div>
      <br/>
      <div className="usestate__second">
        <input type="text" onChange={onChange}/>
        <h3>{inputValue}</h3>
      </div>
    </div>
  );
}

export default UseStateHook;
