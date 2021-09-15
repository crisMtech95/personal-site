import './App.css';
import React, { useState } from 'react'
// import { Switch, Route } from 'react-router-dom'
import Background from './components/Background';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Skills from './components/Skills';
import Contact from './components/Contact';
import SideBar from './components/SideBar'
import About from './components/About'
import { useSpring, animated } from 'react-spring'

function App() {
  let [showSideBar, setShowSideBar] = useState(false)

  const props = useSpring({
    from: {width: 0},
    to: { width: 100}
  })

  return (
    <div className="App">
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        <Background/>
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        {showSideBar &&
          <SideBar setShowSideBar={setShowSideBar}/>
        }
        <Footer/>
    </div>
  );
}

export default App;
