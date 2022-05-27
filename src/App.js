import "./App.css";
import UseStateHook from "./UseState/UseStateHook";
import UseReducerHook from "./UseReducer/UseReducerHook";
import UseEffectHook from "./UseEffect/UseEffectHook";
import UseRefHook from "./UseRef/UseRefHook";
import UseLayoutEffectHook from "./UseLayoutEffect/UseLayoutEffectHook";
import UseImperativeHandleHook from "./UseImperativeHandle/UseImperativeHandleHook";
import UseContextHook from "./UseContext/UseContextHook";

function App() {
  return (
    <div className="App">
      {/*<UseStateHook/>*/}
      {/*<UseReducerHook/>*/}
      {/*<UseEffectHook/>*/}
      {/*<UseRefHook/>*/}
      {/*<UseLayoutEffectHook/>*/}
      {/*<UseImperativeHandleHook/>*/}
      <UseContextHook/>
    </div>
  );
}

export default App;
