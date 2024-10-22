import PropTypes from 'prop-types'

const AboutItem = ({ year, title, company, details, image }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border-white dark:border-gray-900" />
        <div className="flex flex-wrap gap-4 items-center text-xs md:text-sm py-4">
          {image ? (
            <img 
              src={image} 
              alt="Profile Image" 
              className="w-24 h-24 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out" 
            />
          ) : (
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#004cffbf] rounded-md">{year}</span>
          )}
          <div>
            <h3 className="text-lg font-semibold text-[#001b5e] dark:text-blue-200">{title}</h3>
            {company && <p className="text-md font-medium text-gray-600 dark:text-gray-400">{company}</p>}
          </div>
        </div>
        <p className="my-2 text-base font-normal text-stone-600 dark:text-gray-300">{details}</p>
      </li>
    </ol>
  )
}

AboutItem.propTypes = {
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  details: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default AboutItem;
