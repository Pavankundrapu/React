import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
   <ThemeProvider>
    <h1>hi people</h1>
    <Login/>
    <Profile/>
   </ThemeProvider>
  )
}

export default App
