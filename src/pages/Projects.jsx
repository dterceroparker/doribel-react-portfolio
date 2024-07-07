import ProjectItem from '../components/ProjectItem';
import petHealthFetchImg from '../assets/images/petHealthFetch.png';
import returningHomeQuoteImg from '../assets/images/returningHomeQuote.png';
import pawMilyImg from '../assets/images/pawMily.png';

const Projects = () => {
  

  const projectsData = [
    { img: petHealthFetchImg, title: 'Pet HealthFetch React App', projectLink: 'https://pet-health-fetch.netlify.app/', githubLink: 'https://github.com/dterceroparker/pet-healthfetch-front-end'},
    { img: returningHomeQuoteImg, title: 'Returning Home', projectLink: 'https://returning-home-app.netlify.app/', githubLink: 'https://github.com/dterceroparker/returning-home-app' },
    { img: pawMilyImg, title: 'PawMily Album', projectLink: 'https://pawmily-album.fly.dev/', githubLink: 'https://github.com/dterceroparker/pawmily-album' }
  ]

  return (
    <section id="projects" className="max-w-screen-lg mx-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8 mt-0">
        My Projects
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          My projects cater to diverse needs, from the mental health-focused Returning Home App that supports bootcamp participants to the convenient Pet HealthFetch app for pet owners. Additionally, PawFamily explores the intersection of social interaction and a calming environment. These projects showcase my interest in the potential for technology to enhance different aspects of life. While they serve distinct purposes, there are possibilities for combining features in the future, such as incorporating pet-related content within the Returning Home App.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
