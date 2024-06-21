import AboutItem from '../components/AboutItem'

const data = [
  {
    year: 2024,
    title: 'General Assembly Software Engineering Bootcamp',
    details: 'Replace with your first experience details here',
  },
  {
    year: 2023, 
    title: 'Another Experience Title',
    details: 'Replace with your second experience details here',
  },
]

function About() {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        <span className="sr-only">About</span> About Me
      </h1>
      {data.map((item, idx) => (
        <AboutItem key={idx} year={item.year} title={item.title} details={item.details} />
      ))}
    </div>
  )
}

export default About
