import { TypeAnimation } from 'react-type-animation'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Landing = () => {
  const githubMainLink = 'https://github.com/dterceroparker'
  const linkedinLink = 'https://www.linkedin.com/in/doribelt-p'

  return (
    <div id="main" className="relative flex items-center justify-center h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/landing2.jpeg"
        alt="landing page background"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-white/10 flex items-center justify-center">
        <div className="max-w-[700px] mx-auto text-center p-4 lg:p-8 bg-white/60 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            {`Welcome! I'm Doribel!`}
          </h1>
          <h2 className="text-2xl sm:text-3xl py-4 text-gray-800">
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
          <div className="mt-4 flex space-x-4 justify-center">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition duration-300 flex items-center"
            >
              <FaLinkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a
              href={githubMainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 text-gray-700 font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300 flex items-center"
            >
              <FaGithubSquare className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
