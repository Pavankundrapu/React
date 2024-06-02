import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter] = useState(5)

  //let counter = 5;
   
  const addValue = ()=>{
    //counter = counter+1;
    if(counter >= 20) 
      {setcounter = 20}
    else{
      setcounter(counter+1);
    }
  }

  const reduceValue = ()=>{
    if(counter <= 0)
      {
        setcounter = 0
      }
      else{
        setcounter(counter-1);
      }
   
    //counter = counter-1;
  }

  return (
    <>
        <h1>chai aur code now in react</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>
        Add value {counter}</button>
        <br />
        <button onClick={reduceValue}>
        Reduce value {counter}
        </button>
    </>
  )
}

export default App
