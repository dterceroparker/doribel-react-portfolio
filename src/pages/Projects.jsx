import ProjectItem from '../components/ProjectItem';
import petHealthFetchImg from '../assets/images/petHealthFetch.png';
import returningHomeQuoteImg from '../assets/images/returningHomeQuote.png';
import pawMilyImg from '../assets/images/pawMily.png';

const Projects = () => {
  const githubLink = "https://github.com/dterceroparker"

  const projectsData = [
    { img: petHealthFetchImg, title: 'Pet HealthFetch React App', projectLink: 'https://pet-health-fetch.netlify.app/' },
    { img: returningHomeQuoteImg, title: 'Returning Home', projectLink: 'https://returning-home-app.netlify.app/' },
    { img: pawMilyImg, title: 'PawMily Album', projectLink: 'https://pawmily-album.fly.dev/' }
  ]

  return (
    <section id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-2">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">My Projects</h1>
      <p className="text-center mb-8 py-4 text-gray-500">
        My projects cater to diverse needs, from the mental health-focused Returning Home App that supports bootcamp graduates to the convenient Pet HealthFetch app for pet owners. Additionally, PawFamily explores the intersection of social interaction and a calming environment. These projects showcase my interest in the potential for technology to enhance different aspects of life. While they serve distinct purposes, there might be intriguing possibilities for combining features in the future, like incorporating pet-related content within the Returning Home App.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectItem key={idx} {...project} githubLink={githubLink} />
        ))}
      </div>
    </section>
  )
}

export default Projects
