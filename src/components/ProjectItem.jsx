import { FaGithubSquare } from "react-icons/fa"

const ProjectItem = ({ img, title }) => {
  return (
    <section
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
    >
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10 px-2 py-2" />
      <div
        className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h3 className="text-xl font-bold text-white py-4 tracking-wider text-center">
          {title}
        </h3>
        {/* <p className="pb-4 pt-2 text-white text-center">React Js</p> */}
        <div className="flex flex-col items-center">
        <button
          className="p-2 rounded-lg bg-gray-200 text-gray-700 font-bold cursor-pointer hover:bg-blue-200 transition duration-300 ease-in-out"
          onClick={() => window.open("https://github.com/dterceroparker")}
        >
          <FaGithubSquare className='mx-auto w-5 h-5'/>
        </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectItem