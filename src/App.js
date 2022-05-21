import "./App.css";
import UseStateHook from "./UseState/UseStateHook";
import UseReducerHook from "./UseReducer/UseReducerHook";
import UseEffectHook from "./UseEffect/UseEffectHook";
import UseRefHook from "./UseRef/UseRefHook";

function App() {
  return (
    <div className="App">
      {/*<UseStateHook/>*/}
      {/*<UseReducerHook/>*/}
      {/*<UseEffectHook/>*/}
      <UseRefHook/>
    </div>
  );
}

export default App;
