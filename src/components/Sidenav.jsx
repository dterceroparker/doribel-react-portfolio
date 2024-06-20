import React, { useState } from 'react'
import { useRef, useEffect } from 'react'

import { 
  AiOutlineMenu, 
  AiOutlineHome, 
  AiOutlineInfoCircle, 
  AiOutlineProject, 
  AiOutlineMail
} from 'react-icons/ai'
import { BsPerson } from'react-icons/bs'
import { FaToggleOn, FaToggleOff } from 'react-icons/fa6'

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const mainRef = useRef(null)

  const handleNav = () => {
    setNav(!nav)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (nav && mainRef.current) {  // Check if element exists before scrolling
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [nav]);
  

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} overflow-hidden`}>
      <AiOutlineMenu size={20} 
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav && (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href="#main"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
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
            <BsPerson size={20} />
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
            onClick={toggleDarkMode} // Toggle mode button
            href="#main"
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            {isDarkMode ? <FaToggleOff size={20} /> : <FaToggleOn size={20} />}
            <span className='pl-14'>Toggle Mode</span>
          </a>
        </div>
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome size={20} />
          </a>
          <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineInfoCircle size={20} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineProject size={20} />
          </a>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPerson size={20} />
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail size={20} />
          </a>
      </div>
    </div>
  </div>
  )
}

export default Sidenav