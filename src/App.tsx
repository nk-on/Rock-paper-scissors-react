import { useState } from 'react'
import Heading from './components/Heading/Heading'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
    </>
  )
}

export default App
