import React, { useContext } from 'react'
import { LangContext } from './contexts/LangContext'

function Components() {
  const {lang,langChange} = useContext(LangContext)
  return (
    <>
    <div><div className="text">the language is {lang}</div>
    <button onClick={langChange}>Change</button></div>
    
    </> 
  )
}

export default Components