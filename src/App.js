import React from "react"
import {useState} from "react"


const App=() =>{
  const [count,setCount]=useState(0)
  const updateData=() =>
  {
    setCount(count+1)
    
  }
  console.log("__________");
  return(
    <div className="App">
      <h1>{count}</h1>
      <button onClick ={updateData}>updateData</button>
    </div>
  );
}
export default App;

