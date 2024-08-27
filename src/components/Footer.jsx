import { motion } from 'framer-motion';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full p-4 text-center bg-gray-900 text-white"
    >
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/doribelt-p"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/dterceroparker"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithubSquare className="w-8 h-8" />
        </a>
      </div>
      <p className="mt-4 text-sm">&copy; 2024 Doribel Tercero - Parker. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;
