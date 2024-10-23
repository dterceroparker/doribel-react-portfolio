import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import DemosVideos from './components/DemosVideos.jsx';
import Footer from './components/Footer.jsx';
import Landing from './pages/Landing.jsx';
import Projects from './pages/Projects.jsx';
import Sidenav from './components/Sidenav.jsx';
import ThemeProvider from "./components/context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Sidenav />
      <Landing />
      <About />
      <DemosVideos />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
