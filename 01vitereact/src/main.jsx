import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp()
{
  return (
    <div>
    <h2>this is a fun task that is done by me</h2>
  </div>
  )
}
/* const reactElement = {
  type : 'a',
  props : {
    href : 'https://google.com',
    target : '_blank'
  },
  children : 'click me to visit google'
}*/

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit')

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit our google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
  )
