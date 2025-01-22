import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrResume } from "react-icons/gr";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "./context/ThemeContext";
import { MdVideoLibrary } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`bg-${
        theme === "dark" ? "gray-900" : "gray-100"
      } min-h-screen`}
    >
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 flex items-center md:hidden">
        <button
          aria-label="Toggle Menu"
          onClick={handleNav}
          className={`p-3 rounded-full shadow-md transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-yellow-400"
              : "bg-white text-blue-500"
          }`}
        >
          {nav ? <IoMdClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <button
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-md ml-2 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-yellow-400"
              : "bg-white text-blue-500"
          }`}
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <nav
          className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-40 transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-900 text-yellow-400"
              : "bg-gray-100 text-blue-500"
          }`}
        >
          <ul className="space-y-6">
            {[
              {
                href: "#main",
                label: "Home",
                icon: <AiOutlineHome size={24} />,
              },
              {
                href: "#about",
                label: "About",
                icon: <AiOutlineInfoCircle size={24} />,
              },
              {
                href: "#demos-videos",
                label: "Demos",
                icon: <MdVideoLibrary size={24} />,
              },
              {
                href: "#projects",
                label: "Projects",
                icon: <AiOutlineProject size={24} />,
              },
              {
                href: "#main",
                label: "Resume",
                icon: <GrResume size={24} />,
              },
              {
                href: "#contact",
                label: "Contact",
                icon: <AiOutlineMail size={24} />,
              },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={handleNav}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:scale-110 transition-transform"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed top-[30%] left-4 z-40 flex-col space-y-4">
        {[
          { href: "#main", icon: <AiOutlineHome size={24} /> },
          { href: "#about", icon: <AiOutlineInfoCircle size={24} /> },
          { href: "#demos-videos", icon: <MdVideoLibrary size={24} /> },
          { href: "#projects", icon: <AiOutlineProject size={24} /> },
          { href: "#main", icon: <GrResume size={24} /> },
          { href: "#contact", icon: <AiOutlineMail size={24} /> },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center justify-center p-3 rounded-full shadow-md transition-transform hover:scale-110 ${
              theme === "dark"
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-white text-blue-500 hover:bg-gray-200"
            }`}
          >
            {item.icon}
          </a>
        ))}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`mt-4 p-3 rounded-full shadow-md transition-transform hover:scale-110 ${
            theme === "dark"
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-blue-500 hover:bg-gray-200"
          }`}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
