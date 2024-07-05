
import AboutItem from '../components/AboutItem'
import { jobs } from '../data/jobs-data'

const About = () => {
  return (
    <section id="about" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="w-56 h-56 flex justify-center items-center rounded-full border-4 border-gray-200 hover:scale-110 transition-transform duration-300">
          <img src="/logo.png" alt="Logo" className="w-48 h-48 rounded-full object-cover shadow-lg" />
        </div>
        <img src="/profile.jpg" alt="Profile" className="w-56 h-56 rounded-full object-cover hover:scale-110 transition-transform duration-300 shadow-lg" />
      </div>
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        <span className="sr-only">About</span> About Me
      </h1>
      {jobs.map((item, idx) => (
        <AboutItem key={idx} {...item} />
      ))}
    </section>
  )
}


export default About
