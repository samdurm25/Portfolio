import { useState } from 'react'
import './App.css'

// Component Imports 
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header className=""></Header>
      <About className=""></About>
      <Projects className=""></Projects>
      <Contact className=""></Contact>
    </>
  )
}

export default App
