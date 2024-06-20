// npm modules
// import React from 'react';

// import { Routes, Route, useNavigate } from 'react-router-dom'

// components
import Sidenav from './components/Sidenav'
import Main from './pages/Main'
import About from './pages/About'



const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
    </>
  )
}

export default App