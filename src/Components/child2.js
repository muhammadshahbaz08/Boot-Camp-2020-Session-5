import { useReducer } from "react";
import { counterReducer } from "../CounterReducer";
export const Child2 = () => {
  let [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>This is Child #2 Using Counter Reducer</h1>
      <h3>Value of Reducer State is : {state}</h3>
      <button onClick={() => dispatch("INCREMENT")}>
        Increment Reducer Counter
      </button>
    </div>
  );
};
