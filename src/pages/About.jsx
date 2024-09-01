import AboutItem from '../components/AboutItem'
import { jobs } from '../data/jobs-data'

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto p-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="relative w-56 h-56 overflow-hidden flex justify-center items-center rounded-full bg-black border-4 border-blue-200 shadow-lg hover:scale-110 transition-transform duration-300">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-48 h-48 rounded-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div className="relative w-56 h-56 overflow-hidden">
          <img 
            src="/about.jpg" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover shadow-lg transition-transform duration-300 transform hover:scale-110 object-top"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex justify-center items-center">
            <span className="text-white text-lg font-semibold">Doribel</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        <span className="sr-only">About</span> About Me
      </h1>
      <div className="space-y-8">
        {jobs.map((item, idx) => (
          <AboutItem key={idx} {...item} />
        ))}
      </div>
    </section>
  )
}

export default About
