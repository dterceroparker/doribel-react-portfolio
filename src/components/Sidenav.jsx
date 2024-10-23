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
    <>
      <div className="overflow-hidden bg-bgPrimary dark:bg-bgPrimaryDark">
        <div className="fixed top-4 right-4 z-[99] flex items-center md:hidden">
          {!nav && (
            <>
              <button
                aria-label="Open menu"
                onClick={handleNav}
                className="cursor-pointer menu-icon mr-4 flex items-center justify-center bg-gray-100 bg-opacity-80 rounded-full p-2 shadow-md dark:bg-gray-800 dark:bg-opacity-80 transition-colors duration-300 ease-in-out"
              >
                <AiOutlineMenu
                  size={20}
                  className="text-gray-900 dark:text-gray-200"
                />
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 rounded-full shadow-md transition-all duration-300 ease-in-out"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <FaSun className="text-yellow-400 h-6 w-6 hover:text-yellow-300" />
                ) : (
                  <FaMoon className="text-blue-400 h-6 w-6 hover:text-blue-300" />
                )}
              </button>
            </>
          )}
        </div>
        {nav && (
          <div
            className={`fixed w-full h-screen flex flex-col justify-center items-center z-20 
            ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} 
            bg-opacity-95 transition-all duration-300 ease-in-out`}
            aria-hidden={!nav}
            role="dialog"
          >
            <button
              onClick={handleNav}
              className="absolute top-4 right-4 p-4 focus:outline-none"
              aria-label="Close menu"
            >
              <IoMdClose size={30} className={`${theme === "dark" ? "text-yellow-400" : "text-blue-400"}`} />
            </button>
            {[
              { href: "#main", icon: <AiOutlineHome size={20} />, label: "Home" },
              { href: "#about", icon: <AiOutlineInfoCircle size={20} />, label: "About" },
              { href: "#demos-videos", icon: <MdVideoLibrary size={20} />, label: "Demos Videos" },
              { href: "#projects", icon: <AiOutlineProject size={20} />, label: "Projects" },
              { href: "#main", icon: <GrResume size={20} />, label: "Resume" },
              { href: "#contact", icon: <AiOutlineMail size={20} />, label: "Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleNav}
                className={`w-[75%] max-w-[300px] flex items-center rounded-full shadow-lg 
                  ${theme === "dark" ? "bg-gray-900 text-yellow-400" : "bg-gray-100 text-blue-400"} 
                  shadow-gray-400 m-2 p-4 hover:scale-110 
                  ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"} 
                  transition-transform duration-300 ease-in-out`}
                aria-label={`Navigate to ${item.label}`}
              >
                <span className="mr-2 flex-shrink-0">{item.icon}</span>
                <span className="flex-grow text-left">{item.label}</span>
              </a>
            ))}
          </div>
        )}
        <div className="hidden md:block fixed top-[25%] z-10">
          <div className="flex flex-col items-center">
            {[
              { href: "#main", icon: <AiOutlineHome size={20} /> },
              { href: "#about", icon: <AiOutlineInfoCircle size={20} /> },
              { href: "#demos-videos", icon: <MdVideoLibrary size={20} /> },
              { href: "#projects", icon: <AiOutlineProject size={20} /> },
              { href: "#main", icon: <GrResume size={20} /> },
              { href: "#contact", icon: <AiOutlineMail size={20} /> },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 text-gray-900 dark:text-gray-200 hover:scale-110 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={`Navigate to ${item.href.substring(1)}`}
              >
                {item.icon}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-8 bg-transparent rounded-full flex justify-center items-center p-4 shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400 h-10 w-10 hover:text-yellow-300" />
              ) : (
                <FaMoon className="text-blue-400 h-10 w-10 hover:text-blue-300" />
              )}
              <span className="sr-only">Toggle Theme</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
