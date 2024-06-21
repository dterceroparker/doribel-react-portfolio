import ProjectItem from '../components/ProjectItem.jsx'
import petHealthFetchImg from '../assets/images/petHealthFetch.png'
import returningHomeImg from '../assets/images/returningHome.png'

function Projects() {
  return (
    <section id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-0'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Projects</h1>
      <p className='text-center py-4 text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore ex libero consectetur at nobis. Architecto, blanditiis quaerat a corrupti totam incidunt, eius illo dolor eum tempore non distinctio esse animi.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={petHealthFetchImg} title='Pet HealthFetch App' />
        <ProjectItem img={returningHomeImg} title='Returning Home App' />
      </div>
    </section>
  )
}

export default Projects
