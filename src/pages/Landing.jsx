import { TypeAnimation } from 'react-type-animation'

const Landing = () => {
  return (
    <div id="main" className="relative flex items-center justify-center h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/landing.jpg"
        alt="landing page background"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-white/10 flex items-center justify-center">
        <div className="max-w-[700px] mx-auto text-center p-4 lg:p-8 bg-white/60 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            {`Welcome! I'm Doribel!`}
          </h1>
          <h2 className="text-2xl sm:text-3xl py-4 text-gray-800">
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
              wrapper="span"
              cursor={true}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
            />
          </h2>
          <div className="mt-4">
            <div
              className="linkedin-icon cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 text-white bg-opacity-95 border border-linkedin hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:border-yellow-500 rounded-full p-1.5 transition duration-300 ease-in-out inline-flex items-center justify-center"
              onClick={() => window.open('https://www.linkedin.com/in/doribelt-p/')}
            >
              <span className="text-base font-semibold">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
