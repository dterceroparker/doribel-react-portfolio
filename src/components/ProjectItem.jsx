import PropTypes from 'prop-types'
import { FaGithubSquare } from "react-icons/fa"
import { IoMdOpen } from "react-icons/io"

const ProjectItem = ({ img, title, githubLink, projectLink }) => {
  return (
    <section className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl overflow-hidden group hover:shadow-2xl transition duration-300">
      <div className="p-4">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-48 sm:h-64 md:h-72 transform scale-100 group-hover:scale-105 transition duration-300 rounded-xl"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-gray-800 to-gray-900 bg-opacity-90 text-center">
        <div>
          <h3 className="text-xl font-bold text-white py-4 tracking-wider">{title}</h3>
          <div className="flex justify-center space-x-4">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-200 text-gray-700 font-bold cursor-pointer hover:bg-blue-200 hover:text-white transition duration-300 flex items-center"
                >
                  <FaGithubSquare className="w-6 h-6 mr-2" />
                  GitHub
                </a>
              )}
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-200 text-gray-700 font-bold cursor-pointer hover:bg-blue-200 hover:text-white transition duration-300 flex items-center"
                >
                  <IoMdOpen className="w-6 h-6 mr-2" />
                  Visit Project
                </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
}

export default ProjectItem
