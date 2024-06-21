import AboutItem from '../components/AboutItem'

const data = [
  {year: 2024,
    title: '',
    details: 'I am particularly interested in the intersection of technology accessibility and inclusive growth, where innovative solutions empower all users and bridge the digital divide. My background in academic support and non-profit work have equipped me with strong communication, collaboration, and leadership skills. I am proficient in Spanish (native), English (fluent), and French (limited working proficiency).',

  },
  {
    year: 2024,
    title: 'General Assembly Software Engineering Bootcamp',
    details: 'Built a foundation in programming and web development (React, Node.js, Mongoose, Express). I also honed my collaborative skills through hands-on projects and Git/GitHub version control.',
  },
  {
    year: 2023, 
    title: 'CUNY Data Analytics Foundations Course',
    details: 'Acquired the basic skills that a data analytics professional needs to gather, prepare, analyze and display data from structured and unstructured sources. Became familiar with Python, SQL and Tableau, and learned about the industries and professions that use data analytics.',
  },
]

function About() {
  return (
    <section id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <img src="public/logo.png" alt="Logo" className="w-49 h-49 rounded-full object-cover mx-auto md:mx-0" />
      </div>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        <span className="sr-only">About</span> About Me
      </h1>
      {data.map((item, idx) => (
        <AboutItem key={idx} year={item.year} title={item.title} details={item.details} />
      ))}
    </section>
  )
}

export default About
