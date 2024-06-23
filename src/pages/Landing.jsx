import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn } from 'react-icons/fa'

const Landing = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' 
      src="/landing.jpg" 
      alt="landing page background" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 
            className='flex text-center sm:text-5xl text-4xl font-bold text-gray-800'>{`Welcome! I'm Doribel!`}
          </h1>
          <h2 
            className='flex text-center sm:text-3xl text-2xl pt-4 py-4 text-gray-800'>
            {`I'm`}
            <TypeAnimation
              sequence={[
                'a bilingual software engineering aspirant.',
                2000, 
                'ever-learning.',
                2000,
                'happy you are here!',
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
            className='linkedin-icon cursor-pointer bg-white border border-linkedin hover:border-yellow-500 rounded-full p-1 transition duration-300 ease-in-out flex justify-center items-center '
            onClick={() => window.open('https://www.linkedin.com/in/doribelt-p')}>  
            <FaLinkedinIn 
              className='text-linkedin hover:text-linkedin-hover text-blue-500' 
              size={30} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing