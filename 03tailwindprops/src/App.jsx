import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
   let info = ["this is a good info","this is a bad info"]
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl  mb-4'>Tailwind test</h1>
       <Card username="Pavan Kumar" data={info[0]}/>
       <Card username="Parvathi" data={info[1]}/>
    </>
  )
}

export default App
