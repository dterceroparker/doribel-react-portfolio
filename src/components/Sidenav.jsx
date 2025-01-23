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
      {/* Outer container with background color based on theme */}
      <div className="overflow-hidden bg-bgPrimary dark:bg-bgPrimaryDark">
        {/* Mobile menu and theme toggle button */}
        <div className="fixed top-4 right-4 z-[99] flex items-center md:hidden">
          {!nav && (
            <>
              {/* Open menu button */}
              <button
                aria-label="Open menu"
                onClick={handleNav}
                className={`cursor-pointer flex items-center justify-center bg-gray-100 bg-opacity-80 rounded-full p-2 shadow-md dark:bg-gray-800 dark:bg-opacity-80 transition-all duration-300 ease-in-out ${
                  theme === "dark" ? "text-yellow-400" : "text-blue-400"
                }`}
              >
                <AiOutlineMenu className="h-5 w-5" />
              </button>
              {/* Theme toggle button */}
              <button
                onClick={toggleTheme}
                className="ml-2 flex items-center justify-center bg-gray-100 bg-opacity-80 rounded-full p-2 shadow-md dark:bg-gray-800 dark:bg-opacity-80 transition-all duration-300 ease-in-out"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <FaSun className="text-yellow-400 h-5 w-5 hover:text-yellow-300" />
                ) : (
                  <FaMoon className="text-blue-400 h-5 w-5 hover:text-blue-300" />
                )}
              </button>
            </>
          )}
        </div>

        {/* Fullscreen menu overlay */}
        {nav && (
          <div
            className={`fixed w-full h-screen flex flex-col justify-center items-center z-20 
              ${
                theme === "dark"
                  ? "bg-gradient-to-b from-gray-800 to-gray-900"
                  : "bg-gradient-to-b from-gray-100 to-gray-300"
              } transition-all duration-300`}
            aria-hidden={!nav}
            role="dialog"
          >
            <button
              onClick={handleNav}
              className="absolute top-4 right-4 p-4 focus:outline-none"
              aria-label="Close menu"
            >
              <IoMdClose
                size={30}
                className={`${
                  theme === "dark" ? "text-yellow-400" : "text-blue-400"
                }`}
              />
            </button>

            {/* Navigation links */}
            {[
              {
                href: "#main",
                icon: <AiOutlineHome size={20} />,
                label: "Home",
              },
              {
                href: "#about",
                icon: <AiOutlineInfoCircle size={20} />,
                label: "About",
              },
              {
                href: "#demos-videos",
                icon: <MdVideoLibrary size={20} />,
                label: "Videos",
              },
              {
                href: "#projects",
                icon: <AiOutlineProject size={20} />,
                label: "Projects",
              },
              { href: "#main", icon: <GrResume size={20} />, label: "Resume" },
              {
                href: "#contact",
                icon: <AiOutlineMail size={20} />,
                label: "Contact",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleNav}
                className={`w-[75%] max-w-[300px] flex items-center rounded-full shadow-lg 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 text-yellow-400"
                      : "bg-gray-100 text-blue-400"
                  } 
                  shadow-gray-400 m-2 p-4 hover:scale-110 
                  ${
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  } 
                  transition-transform duration-300 ease-in-out`}
                aria-label={`Navigate to ${item.label}`}
              >
                <span className="mr-2 flex-shrink-0">{item.icon}</span>
                <span className="flex-grow text-left">{item.label}</span>
              </a>
            ))}
          </div>
        )}

        {/* Sidebar menu for larger screens */}
        <div className="hidden md:block fixed top-[25%] z-10">
          <div className="flex flex-col items-center">
            {[
              { href: "#main", icon: <AiOutlineHome /> },
              { href: "#about", icon: <AiOutlineInfoCircle /> },
              { href: "#demos-videos", icon: <MdVideoLibrary /> },
              { href: "#projects", icon: <AiOutlineProject /> },
              { href: "#main", icon: <GrResume /> },
              { href: "#contact", icon: <AiOutlineMail /> },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`rounded-full shadow-lg m-2 p-4 text-gray-900 dark:text-gray-200 hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 shadow-gray-600 focus:ring-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 shadow-gray-400 focus:ring-blue-400"
                }`}
                aria-label={`Navigate to ${item.href.substring(1)}`}
              >
                <span
                  className={`${
                    theme === "dark" ? "text-yellow-400" : "text-blue-400"
                  }`}
                >
                  {item.icon}
                </span>
              </a>
            ))}

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={`mt-2 rounded-full shadow-lg p-4 hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 shadow-gray-600 focus:ring-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 shadow-gray-400 focus:ring-blue-400"
              }`}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400 h-5 w-5 hover:text-yellow-300" />
              ) : (
                <FaMoon className="text-blue-400 h-5 w-5 hover:text-blue-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
