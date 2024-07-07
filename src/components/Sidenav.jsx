import { useState, useEffect } from 'react'
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai'
import { GrResume } from 'react-icons/gr'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('darkMode', isDarkMode ? 'false' : 'true')
  }

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode')
    setIsDarkMode(storedMode === 'true')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    document.body.classList.toggle('light', !isDarkMode)
  }, [isDarkMode])

  return (
    <div className="overflow-hidden">
      <AiOutlineMenu
        size={25}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer menu-icon"
      />
      {nav && (
        <div className="fixed w-full h-screen flex flex-col justify-center items-center z-20">
          {[
            { href: '#main', icon: <AiOutlineHome size={20} />, label: 'Home' },
            { href: '#about', icon: <AiOutlineInfoCircle size={20} />, label: 'About' },
            { href: '#projects', icon: <AiOutlineProject size={20} />, label: 'Projects' },
            { href: '#main', icon: <GrResume size={20} />, label: 'Resume' },
            { href: '#contact', icon: <AiOutlineMail size={20} />, label: 'Contact' },
          ].map((item, index) => (
            <a
              key={index}
              onClick={handleNav}
              href={item.href}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {item.icon}
              <span className="pl-14">{item.label}</span>
            </a>
          ))}
          <a
            onClick={toggleDarkMode}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            <span className="pl-14">Toggle</span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
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
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            >
              {item.icon}
            </a>
          ))}
          <a
            onClick={toggleDarkMode}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          >
            {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
