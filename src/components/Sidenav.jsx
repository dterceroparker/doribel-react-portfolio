import React, { useState } from 'react'

import { 
  AiOutlineMenu, 
  AiOutlineHome, 
  AiOutlineInfoCircle, 
  AiOutlineProject, 
  BsPerson, 
  AiOutlineMail 
} from 'react-icons/ai'

const NavLink = ({ href, icon, children }) => (
  <a 
    href={href} 
    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
  >
    {icon}
    <span className='pl-14'>{children}</span>
  </a>
)

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
    />
    {nav && (
      <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
        <NavLink href="#main" icon={<AiOutlineHome size={20}/>}>Home</NavLink>
        <NavLink href="#about" icon={<AiOutlineInfoCircle size={20}/>}>About</NavLink>
        <NavLink href="#projects" icon={<AiOutlineProject size={20}/>}>Projects</NavLink>
        <NavLink href="#main" icon={<BsPerson size={20}/>}>Resume</NavLink>
        <NavLink href="#contact" icon={<AiOutlineMail size={20}/>}>Contact</NavLink>
      </div>
    )}
    <div className='md:block hidden fixed top-[25%] z-10'>
      <div className='flex flex-col'>
        <NavLink href="#main" icon={<AiOutlineHome size={20} />} />
        <NavLink href="#about" icon={<AiOutlineInfoCircle size={20} />} />
        <NavLink href="#projects" icon={<AiOutlineProject size={20} />} />
        <NavLink href="#main" icon={<BsPerson size={20} />} />
        <NavLink href="#contact" icon={<AiOutlineMail size={20} />} />
      </div>
    </div>
  </div>
  )
}

export default Sidenav