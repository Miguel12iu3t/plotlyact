import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PolarChartsViewer } from './components/PolarChartsViewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <PolarChartsViewer />
      </div>
    </>
  )
}

export default App
