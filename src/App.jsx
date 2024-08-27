import Sidenav from './components/Sidenav.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Sidenav />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App