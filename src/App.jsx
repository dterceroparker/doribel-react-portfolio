// npm modules
// import React from 'react';

// import { Routes, Route, useNavigate } from 'react-router-dom'

// components
import Sidenav from './components/Sidenav.jsx'
import Main from './pages/Main.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'



const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Projects />
    </>
  )
}

export default App