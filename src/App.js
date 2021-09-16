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
import { useTransition, animated } from 'react-spring'


function App() {
  let [showSideBar, setShowSideBar] = useState(false)
  const transition = useTransition(showSideBar, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0 },
    // reverse: showSideBar,
    delay: 150,
    // config: () => setShowSideBar(!showSideBar)
  })


  return (
    <div className="App">
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        <Background/>
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        {/* {showSideBar &&
          <SideBar setShowSideBar={setShowSideBar}/>
        } */}
        {transition((styles, item) => item &&
         <animated.div
          setShowSideBar={setShowSideBar}
          className="SideBar__bigCon"
          style={styles}><SideBar setShowSideBar={setShowSideBar}/></animated.div>
        )}
        <Footer/>
    </div>
  );
}

export default App;
