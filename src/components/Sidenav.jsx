import { useState, useRef, useEffect } from 'react'

import { 
  AiOutlineMenu, 
  AiOutlineHome, 
  AiOutlineInfoCircle, 
  AiOutlineProject, 
  AiOutlineMail
} from 'react-icons/ai'
import { GrResume } from 'react-icons/gr'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const mainRef = useRef(null)

  const handleNav = () => {
    setNav(!nav)
    if (nav && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false')
  }
  

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedMode === 'true'); // Set initial state based on localStorage
  }, []);
  
  return (
    <div className= 'overflow-hidden'>
      <AiOutlineMenu size={25} 
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer menu-icon"
      />
      {nav && (
        <div className={`${isDarkMode ? 'dark' : 'light'} fixed w-full h-screen flex flex-col justify-center items-center z-20`}>
          <a
            onClick={handleNav}
            href="#main"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-14'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineInfoCircle size={20} />
            <span className='pl-14'>About</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-14'>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <GrResume size={20} />
            <span className='pl-14'>Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-14'>Contact</span>
          </a>
          <a 
            href="#main"
            onClick={toggleDarkMode}
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            <span className='pl-14'>Toggle</span>
          </a>
        </div>
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className={`${isDarkMode ? 'dark' : 'light'} flex flex-col`}>
          <a
            href="#main"
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
          >
            <AiOutlineInfoCircle size={20} />
          </a>
          <a
            href="#projects"
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
          >
            <GrResume size={20} />
          </a>
          <a
            href="#contact"
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            href="#main"
            onClick={toggleDarkMode}
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
          >
            {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </a>
        </div>
    </div>
  </div>
  )
}

export default Sidenav