
import { useState } from 'react'
import './App.css'

function App() {

  const [counter , setCounter] =useState(0)
  const [decrease , setDecrease] =useState()

  const addValue =()=>{
if (counter === 20) {
  setDecrease('Cannot increase above 20')
  return;
  }
  
    setCounter(counter + 1)
    setDecrease('')
  }


 const removeValue =() =>{
if (counter === 0) {
  setDecrease('Cannot decrease below zero')
  return;
  
}

  setCounter(counter - 1)
  setDecrease('')
 }


  return (
    <div className='main'>
      <div className='elements'>
        <h1 className='alert'>{decrease}</h1>
      <h1>Counter Project</h1>
      <h2>Counter Value : <span>{counter}</span></h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value</button>
    </div>
    </div>
  )
}

export default App
