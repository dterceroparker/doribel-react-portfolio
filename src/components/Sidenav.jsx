import { useState, useEffect } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { GrResume } from 'react-icons/gr';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io'


const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedMode === 'true');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="overflow-hidden">
      {/* Mobile Menu Button */}
      {!nav && (
        <button
          aria-label="Open menu"
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer menu-icon"
        >
          <AiOutlineMenu size={25} className="text-gray-200 dark:text-gray-200" />
        </button>
      )}
      
      {/* Side Navigation Menu */}
      {nav && (
        <div
          className="fixed w-full h-screen flex flex-col justify-center items-center z-20 bg-gray-800 bg-opacity-90"
          aria-hidden={!nav}
          role="dialog"
        >
          <button
            onClick={handleNav}
            className="absolute top-4 right-4 p-4 text-white"
            aria-label="Close menu"
          >
            <IoMdClose size={30} />
          </button>
          {[
            { href: '#main', icon: <AiOutlineHome size={20} />, label: 'Home' },
            { href: '#about', icon: <AiOutlineInfoCircle size={20} />, label: 'About' },
            { href: '#projects', icon: <AiOutlineProject size={20} />, label: 'Projects' },
            { href: '#main', icon: <GrResume size={20} />, label: 'Resume' },
            { href: '#contact', icon: <AiOutlineMail size={20} />, label: 'Contact' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleNav}
              className="w-[75%] max-w-[300px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.icon}
              <span className="pl-4">{item.label}</span>
            </a>
          ))}
          <a
            onClick={toggleDarkMode}
            className="w-[75%] max-w-[300px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun size={20} className="text-yellow-600" /> : <FaMoon size={20} className="text-gray-600" />}
            <span className="pl-4">{isDarkMode ? 'Icon Light Mode' : 'Icon Dark Mode'}</span>
          </a>
        </div>
      )}

      {/* Desktop Navigation Menu */}
      <div className="hidden md:block fixed top-[25%] z-10">
        <div className="flex flex-col">
          {[
            { href: '#main', icon: <AiOutlineHome size={20} /> },
            { href: '#about', icon: <AiOutlineInfoCircle size={20} /> },
            { href: '#projects', icon: <AiOutlineProject size={20} /> },
            { href: '#main', icon: <GrResume size={20} /> },
            { href: '#contact', icon: <AiOutlineMail size={20} /> }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label={`Navigate to ${item.href.substring(1)}`}
            >
              {item.icon}
            </a>
          ))}
          <a
            onClick={toggleDarkMode}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun size={20} className="text-yellow-600" /> : <FaMoon size={20} className="text-gray-600" />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
