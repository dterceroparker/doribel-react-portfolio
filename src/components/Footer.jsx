import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <motion.footer
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        y: prefersReducedMotion ? 0 : 20,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full p-4 text-center bg-gray-900 text-white"
    >
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/doribelt-p"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-8 h-8" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/dterceroparker"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <FaGithubSquare className="w-8 h-8" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-4 text-sm font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        &quot;Try to be a rainbow in someone’s cloud.&quot; <br></br>Maya
        Angelou
      </p>
    </motion.footer>
  );
};

export default Footer;
