import React from 'react'

const AboutItem = ({year, title, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 bordder-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span>{year}</span>
          <span>{title}</span>
        </p>
        <p>{details}</p>
      </li>
    </ol>
  )
}

export default AboutItem