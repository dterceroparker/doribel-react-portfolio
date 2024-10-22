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
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-40"></div>
      <div className="relative z-10 text-center p-4 lg:p-8 max-w-full md:max-w-4xl w-full mx-auto md:pl-64">
        <div className="bg-black bg-opacity-30 rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-2">
            Welcome! I&apos;m Doribel!
          </h1>
          <p className="text-lg sm:text-xl py-4 font-medium text-gray-200">
            I&apos;m a bilingual software engineering aspirant, ever-learning,
            and happy you are here!
          </p>
        </div>
        <div className="mt-4 flex space-x-4 justify-center">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out flex items-center shadow-lg"
          >
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
            LinkedIn
          </a>
          <a
            href={githubMainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-lg bg-gray-200 text-gray-700 font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out flex items-center shadow-lg"
          >
            <FaGithubSquare className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
