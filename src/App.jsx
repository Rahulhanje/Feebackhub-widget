import { useState } from 'react'

import './App.css'
import { Widget } from './components/widget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Widget projectId="1"></Widget> 
  )
}

export default App
