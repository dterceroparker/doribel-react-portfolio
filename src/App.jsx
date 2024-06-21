import Sidenav from './components/Sidenav.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
// import Resume from './pages/Resume.jsx'

function App() {
  return (
    <>
      <Sidenav />
      <Landing />
      <About />
      <Projects />
      <Contact />
      {/* <Resume /> */}
    </>
  )
}

export default App