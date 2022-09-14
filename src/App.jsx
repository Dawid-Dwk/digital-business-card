import { useState } from 'react'
import './App.css'
import Footer from './modules/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="main">
        <Footer/>
      </div>
    </div>

  )
}

export default App
