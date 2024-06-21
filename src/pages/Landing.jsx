import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn } from 'react-icons/fa'

function Landing() {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src="src/assets/images/landing.jpg" alt="landing page background" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Welcome! I'm Doribel</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Bilingual Software Engineering Learner',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
            />
          </h2>
          <div 
            className='linkedin-icon border border-linkedin hover:border-yellow-500 rounded-full p-2 transition duration-300 ease-in-out'
            onClick={() => window.open('https://www.linkedin.com/in/doribelt-p')}>  
            <FaLinkedinIn 
              className='text-linkedin hover:text-linkedin-hover' size={30} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing