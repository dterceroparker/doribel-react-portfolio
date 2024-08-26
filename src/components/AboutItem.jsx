import PropTypes from 'prop-types'

const AboutItem = ({ year, title, company, details, image }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
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
            <h3 className="text-lg font-semibold text-[#001b5e]">{title}</h3>
            {company && <p className="text-md font-medium text-gray-600">{company}</p>}
          </div>
        </div>
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
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
