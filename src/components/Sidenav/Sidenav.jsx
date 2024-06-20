
import  React, { useState } from 'react'

import {  AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'
// import { GrProjects } from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    
  }
  
  return (
    <div >
      <AiOutlineMenu 
      onClick={handleNav} 
      className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-14'>Home</span>
            </a>
            <a href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineInfoCircle size={20}/>
              <span className='pl-14'>About</span>
            </a>
            <a href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20}/>
              <span className='pl-14'>Projects</span>
            </a>
            <a href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20}/>
              <span className='pl-14'>Resume</span>
            </a>
            <a href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20}/>
              <span className='pl-14'>Contact</span>
            </a>
          </div>
        )
        : (
          <div></div>

        )
      }



    </div>
  )
}

export default Sidenav