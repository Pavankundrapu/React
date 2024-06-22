import { useState } from 'react'

import './App.css'

function App() {
  const [user,setUser] = useState({name:'Pavan',age:34});

  const handle = () => {
     setUser((prev)=>({...prev,name : prev.name === 'Pavan'?'Charan':"Pavan"}))
  }

  const handler = () => {
    setUser((prev) => ({...prev,age : prev.age === 34? 32 : 34}))
  }

  const handling = () => {
    setUser((prev) => ({...prev,age : prev.age === 34? 32 : 34,name: prev.name === 'Pavan'?'Charan':"Pavan"}))
  }
  

  return (
    <>
      <h2>the name of person is {user.name}</h2>
      <h2>the age of person is {user.age}</h2>
      <button onClick={handle}>change name</button>
      <br />
      <br />
      <button onClick={handler}>change age</button>
      <br />
      <br />
      <button onClick={handling}>change both</button>
    </>
  )
}

export default App
