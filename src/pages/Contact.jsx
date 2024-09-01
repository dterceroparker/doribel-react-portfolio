import { FaUser, FaPhone, FaEnvelope, FaPen } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg bg-opacity-80">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-6">
          {`Let's Connect!`}
        </h1>
        <form
          action="https://getform.io/f/paygneea"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
          aria-label="Contact form"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="uppercase text-sm py-2 text-gray-700">
                Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  id="name"
                  className="border-2 rounded-lg p-3 pl-10 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  aria-required="true"
                  aria-describedby="name-desc"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="uppercase text-sm py-2 text-gray-700">
                Phone
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  id="phone"
                  className="border-2 rounded-lg p-3 pl-10 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300"
                  type="text"
                  name="phone"
                  placeholder="(123) 456-7890"
                  aria-required="true"
                  aria-describedby="phone-desc"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="email" className="uppercase text-sm py-2 text-gray-700">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  id="email"
                  className="border-2 rounded-lg p-3 pl-10 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  aria-required="true"
                  aria-describedby="email-desc"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="subject" className="uppercase text-sm py-2 text-gray-700">
                Subject
              </label>
              <div className="relative">
                <FaPen className="absolute left-3 top-3 text-gray-400" />
                <input
                  id="subject"
                  className="border-2 rounded-lg p-3 pl-10 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300"
                  type="text"
                  name="subject"
                  placeholder="Message topic name"
                  aria-required="true"
                  aria-describedby="subject-desc"
                />
              </div>
            </div>
            <div className="flex flex-col py-2 md:col-span-2">
              <label htmlFor="message" className="uppercase text-sm py-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="border-2 rounded-lg p-3 border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300"
                rows="10"
                name="message"
                placeholder="Write your message here..."
                aria-required="true"
                aria-describedby="message-desc"
              ></textarea>
            </div>
          </div>
          <button
            className="bg-[#2e65ef] text-white mt-4 w-full p-4 rounded-lg hover:bg-[#001b5e] hover:shadow-md transition duration-300"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
