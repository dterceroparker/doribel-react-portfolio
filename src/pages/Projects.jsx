import ProjectItem from "../components/ProjectItem";
import collabShopImg from "../assets/images/collabShop.png";
import pawMilyImg from "../assets/images/pawMily.png";
import petHealthFetchImg from "../assets/images/petHealthFetch.png";
import returningHomeImg from "../assets/images/returningHome.png";
import tttImg from "../assets/images/ttt.png";

const Projects = () => {
  const projectsData = [
    {
      img: collabShopImg,
      title: "CollabShop: Collaborative React Smart Shopping List",
      tech: "Agile Team Workflow • Firebase • Google OAuth • MERN",
      projectLink: "https://tcl-74-smart-shopping-list.web.app/",
      githubLink:
        "https://github.com/the-collab-lab/tcl-74-smart-shopping-list",
    },
    {
      img: petHealthFetchImg,
      title: "Pet HealthFetch React App",
      tech: "Agile Team Workflow • MERN • JWT Auth • Postman",
      projectLink: "https://pet-health-fetch.netlify.app/",
      githubLink: "https://github.com/dterceroparker/pet-healthfetch-front-end",
    },
    {
      img: returningHomeImg,
      title: "Returning Home",
      tech: "CSS3 • HTML5 • JavaScript",
      projectLink: "https://returning-home-app.netlify.app/",
      githubLink: "https://github.com/dterceroparker/returning-home-app",
    },
    {
      img: pawMilyImg,
      title: "PawMily Album",
      tech: "JavaScript • MEN • Google OAuth",
      projectLink: "https://pawmily-album.fly.dev/",
      githubLink: "https://github.com/dterceroparker/pawmily-album",
    },
    {
      img: tttImg,
      title: "Tic-Tac-Toe Calm",
      tech: "CSS3 • HTML5 • JavaScript",
      projectLink: "https://tic-tac-toe-calm.netlify.app/",
      githubLink: "https://github.com/dterceroparker/",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-screen-lg mx-auto md:pl-20 p-4 pb-8"
      aria-labelledby="projects-title"
      aria-describedby="projects-description"
    >
      <h1
        id="projects-title"
        className="text-4xl font-bold text-[#001b5e] dark:text-blue-200 mb-8 mt-0 text-center"
      >
        Projects
      </h1>
      <div id="projects-description" className="p-6 rounded-lg g mb-8 0">
        <p className="my-2 text-base font-normal text-stone-600 dark:text-gray-300">
          My projects are driven by a deep care for the human experience and
          empathy, aiming to address diverse needs and improve everyday life.
          Returning Home, a mental health-focused app, supports bootcamp
          participants navigating their journeys with resources and
          encouragement. Pet HealthFetch simplifies pet care for owners,
          combining convenience with thoughtful design. PawMily Album blends
          social interaction with a calming environment, exploring the ways
          technology can foster connection and well-being. CollabShop, a
          collaborative web application built with React.js and Firebase,
          highlights the power of teamwork in tech with features like shared
          shopping lists and a dedicated team page. These projects reflect my
          passion for leveraging technology to enhance lives and create
          meaningful connections.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectItem
            key={idx}
            {...project}
            aria-label={`Project titled ${project.title}, built with ${project.tech}.`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
