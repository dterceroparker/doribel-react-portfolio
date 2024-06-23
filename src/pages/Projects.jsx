import ProjectItem from '../components/ProjectItem'
import petHealthFetchImg from '../assets/images/petHealthFetch.png'
import returningHomeImg from '../assets/images/returningHome.png'
import pawMilyImg from '../assets/images/readmeimage.png'

const Projects = () => {
  const projectsData = [
    { img: petHealthFetchImg, title: 'Pet HealthFetch App' },
    { img: returningHomeImg, title: 'Returning Home' },
    { img: pawMilyImg, title: 'PawMily' }
  ]

  return (
    <section id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">My Projects</h1>
      <p className="text-center mb-8 py-4 text-gray-500">
        My projects cater to diverse needs, from the mental health-focused Returning Home App that supports bootcamp graduates to the convenient Pet HealthFetch app for pet owners. Additionally, PawFamily explores the intersection of social interaction and a calming environment. These projects showcase my interest in the potential for technology to enhance different aspects of life. While they serve distinct purposes, there might be intriguing possibilities for combining features in the future, like incorporating pet-related content within the Returning Home App.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
