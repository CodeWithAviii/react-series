import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-black bg-green-400 p-4 rounded-2xl mb-4'>Tailwind CSS</h1>
      <Card username = "Krishna" role = "Problem Solver"  />
      <Card username = "Kanha" role = "Everyone's Friend" />
    </>
  )
}

export default App
