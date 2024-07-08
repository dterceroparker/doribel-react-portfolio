import { TypeAnimation } from 'react-type-animation'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Landing = () => {
  const githubMainLink = 'https://github.com/dterceroparker'
  const linkedinLink = 'https://www.linkedin.com/in/doribelt-p'

  return (
    <div id="main" className="relative flex items-center justify-center min-h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover min-h-full min-w-full"
        src="/landing.jpeg"
        alt="landing page background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50">
      </div>
      <div className="relative z-10 text-center p-4 lg:p-8 backdrop-filter backdrop-blur-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
          {`Welcome! I'm Doribel!`}
        </h1>
        <h2 className="text-2xl sm:text-2xl py-4 text-white">
          {`I'm`}
          <TypeAnimation
            sequence={[
              'a bilingual software engineering aspirant.',
              2000,
              'ever-learning.',
              2000,
              'happy you are here!',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
          />
        </h2>
        <div className="mt-2 flex space-x-4 justify-center">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out flex items-center shadow-lg"
          >
            <FaLinkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
          <a
            href={githubMainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 text-gray-700 font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out flex items-center shadow-lg"
          >
            <FaGithubSquare className="w-6 h-6 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing
