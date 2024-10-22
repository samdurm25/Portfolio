import { useState } from 'react'
import './App.css'

// Component Imports 
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app"> 
      <Header className=""></Header>

      <section id="home">
        <Home></Home>
      </section>

      <section id="about">
        <About></About>
      </section>

      <section id="projects">
        <Projects></Projects>
      </section>

      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  )
}

export default App
