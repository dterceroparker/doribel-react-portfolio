
import AboutItem from '../components/AboutItem'
import { jobs } from '../data/jobs-data'

function About() {
  return (
    <section id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <img src="/logo.png" alt="Logo" className="w-49 h-49 rounded-full object-cover mx-auto md:mx-0" />
      </div>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        <span className="sr-only">About</span> About Me
      </h1>
      {jobs.map((item, idx) => (
        <AboutItem key={idx} {...item} />
      ))}
    </section>
  )
}

export default About
