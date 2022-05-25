import "./App.css";
import UseStateHook from "./UseState/UseStateHook";
import UseReducerHook from "./UseReducer/UseReducerHook";
import UseEffectHook from "./UseEffect/UseEffectHook";
import UseRefHook from "./UseRef/UseRefHook";
import UseLayoutEffectHook from "./UseLayoutEffect/UseLayoutEffectHook";

function App() {
  return (
    <div className="App">
      {/*<UseStateHook/>*/}
      {/*<UseReducerHook/>*/}
      {/*<UseEffectHook/>*/}
      {/*<UseRefHook/>*/}
      <UseLayoutEffectHook/>
    </div>
  );
}

export default App;
