import React from "react"


const App=() =>{
  const apple=()=>{
    alert ("function called");
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={apple}>click me</button>
    
    </div>
  )
}

export default App;
