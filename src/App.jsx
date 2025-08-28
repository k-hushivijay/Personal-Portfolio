import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import './index.css';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Khushi</h1> */}
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
