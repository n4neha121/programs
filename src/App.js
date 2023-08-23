import React from "react"
import { useState } from "react"


const App=() =>{
  const [data,setData]=useState("neha")
  const updateData=() =>
  {
    setData("neha kumari")
  }
  console.warn("__________");
  return(
    <div className="App">
      <h1>{data}</h1>
      <button onClick ={updateData}>updateData</button>
    </div>
  );
}
export default App;

