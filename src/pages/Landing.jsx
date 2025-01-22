import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  const githubMainLink = "https://github.com/dterceroparker";
  const linkedinLink = "https://www.linkedin.com/in/doribelt-p";

  return (
    <div
      id="main"
      className="relative flex items-center justify-center min-h-screen"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/landing.jpg"
        alt="landing page background"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4 lg:p-8 max-w-full md:max-w-4xl w-full mx-auto md:pl-64">
        <div className="bg-black bg-opacity-70 rounded-lg p-6 shadow-xl">
          <h1 className="text-4xl sm:text-4xl font-bold text-white mb-4">
            Welcome! I&apos;m Doribel!
          </h1>
          <p className="text-lg sm:text-xl py-4 font-medium text-gray-300">
            A bilingual, ever-learning tech enthusiast passionate about making a
            difference. Glad you&apos;re here!
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out shadow-md"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              LinkedIn
            </a>
            <a
              href={githubMainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-800 text-white font-bold cursor-pointer hover:bg-gray-900 transition duration-300 ease-in-out shadow-md"
            >
              <FaGithubSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
