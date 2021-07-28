import { useContext } from "react";
import CounterContext from "../CounterContext";

export const Child = () => {
let counterValue = useContext(CounterContext);
  return (
    <div className="child1">
      <h1>This is Child #1 Using Counter Context</h1>
      <h3>CounterValue is : {counterValue}</h3>

      <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
    </div>
  )
}