// import { useState } from 'react'
import './App.css'

import AnimatedCursor from 'react-animated-cursor'

// Component Imports 
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div id="app">
			<AnimatedCursor
				innerSize={15}
				outerSize={10}
				color='14, 149, 70'
				outerAlpha={0.4}
				innerScale={0.8}
				outerScale={5}
				clickables={[
					'a',
					'.scroll-div',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link'
				]}
			/>

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
