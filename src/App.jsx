import Sidenav from './components/Sidenav.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider } from './components/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Sidenav />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </ThemeProvider>
  )
}

export default App