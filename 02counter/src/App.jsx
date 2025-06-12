import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    if(counter < 20){
    setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Arvind Kumar</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}>Add Value</button> 
      <br />
      <button
      onClick={removeValue}>Sub Value</button>
    </>
  )
}

export default App
