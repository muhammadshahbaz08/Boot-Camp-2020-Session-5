import React, { useState } from 'react';
import {Parent} from "../Components/parent.js"
import CounterContext from '../CounterContext.js';
function App() {
  const countState = useState(0)
  return (
    <CounterContext.Provider value={countState}>
      <div className="App">   
      <Parent/>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
