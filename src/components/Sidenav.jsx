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
                className="cursor-pointer menu-icon mr-4"
              >
                <AiOutlineMenu
                  size={25}
                  className="text-gray-900 dark:text-gray-200"
                />
              </button>
              <button
                onClick={toggleTheme}
                className="bg-transparent rounded-full flex justify-center items-center p-2"
              >
                {theme === "dark" ? (
                  <FaSun
                    className="text-yellow-500 h-6 w-6"
                    aria-label="Switch to light mode"
                  />
                ) : (
                  <FaMoon
                    className="text-blue-500 h-6 w-6"
                    aria-label="Switch to dark mode"
                  />
                )}
              </button>
            </>
          )}
        </div>
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
                href: "#projects",
                icon: <AiOutlineProject size={20} />,
                label: "Projects",
              },
              {
                href: "#resume",
                icon: <GrResume size={20} />,
                label: "Resume",
              },
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
                className="w-[75%] max-w-[300px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.icon}
                <span className="pl-4">{item.label}</span>
              </a>
            ))}
          </div>
        )}
        <div className="hidden md:block fixed top-[25%] z-10">
          <div className="flex flex-col items-center">
            {[
              { href: "#main", icon: <AiOutlineHome size={20} /> },
              { href: "#about", icon: <AiOutlineInfoCircle size={20} /> },
              { href: "#projects", icon: <AiOutlineProject size={20} /> },
              { href: "#resume", icon: <GrResume size={20} /> },
              { href: "#contact", icon: <AiOutlineMail size={20} /> },
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
            <button
              onClick={toggleTheme}
              className="mt-8 bg-transparent rounded-full flex justify-center items-center p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {theme === "dark" ? (
                <FaSun
                  className="text-yellow-500 h-10 w-10"
                  aria-label="Switch to light mode"
                />
              ) : (
                <FaMoon
                  className="text-blue-500 h-10 w-10"
                  aria-label="Switch to dark mode"
                />
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
