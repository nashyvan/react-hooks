import "./App.css";
import UseStateHook from "./UseState/UseStateHook";
import UseReducerHook from "./UseReducer/UseReducerHook";
import UseEffectHook from "./UseEffect/UseEffectHook";
import UseRefHook from "./UseRef/UseRefHook";
import UseLayoutEffectHook from "./UseLayoutEffect/UseLayoutEffectHook";
import UseImperativeHandleHook from "./UseImperativeHandle/UseImperativeHandleHook";
import UseContextHook from "./UseContext/UseContextHook";
import UseMemoHook from "./UseMemo/UseMemoHook";
import UseCallbackHook from "./UseCallback/UseCallbackHook";

function App() {
  return (
    <div className="App">
      {/*<UseStateHook/>*/}
      {/*<UseReducerHook/>*/}
      {/*<UseEffectHook/>*/}
      {/*<UseRefHook/>*/}
      {/*<UseLayoutEffectHook/>*/}
      {/*<UseImperativeHandleHook/>*/}
      {/*<UseContextHook/>*/}
      {/*<UseMemoHook/>*/}
      <UseCallbackHook/>
    </div>
  );
}

export default App;
