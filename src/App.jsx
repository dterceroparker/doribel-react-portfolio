import { useState } from 'react'
import Sidenav from './components/Sidenav.jsx'
import Main from './pages/Main.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'

const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </>
  )
}

export default App