import { FaUser, FaPhone, FaEnvelope, FaPen } from "react-icons/fa";

const Contact = () => {
  const formUrl = import.meta.env.VITE_FORM_URL;

  return (
    <section id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-white mb-6">
          {`Let's Connect!`}
        </h1>
        <form
          action={formUrl}
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
          aria-label="Contact form"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "John Doe",
                icon: <FaUser />,
              },
              {
                id: "phone",
                label: "Phone",
                type: "text",
                placeholder: "(123) 456-7890",
                icon: <FaPhone />,
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "you@example.com",
                icon: <FaEnvelope />,
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "Message topic name",
                icon: <FaPen />,
              },
            ].map(({ id, label, type, placeholder, icon }) => (
              <div key={id} className="flex flex-col">
                <label
                  htmlFor={id}
                  className="uppercase text-sm py-2 text-gray-700 dark:text-gray-300"
                >
                  {label}
                </label>
                <div className="relative">
                  {icon && (
                    <span className="absolute left-3 top-3 text-gray-400">
                      {icon}
                    </span>
                  )}
                  <input
                    id={id}
                    className="border-2 rounded-lg p-3 pl-10 flex border-gray-300 dark:border-gray-600 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300 dark:bg-gray-700 dark:text-white"
                    type={type}
                    name={id}
                    placeholder={placeholder}
                    aria-required="true"
                    aria-describedby={`${id}-desc`}
                  />
                </div>
              </div>
            ))}
            <div className="flex flex-col py-2 md:col-span-2">
              <label
                htmlFor="message"
                className="uppercase text-sm py-2 text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                className="border-2 rounded-lg p-3 border-gray-300 dark:border-gray-600 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300 dark:bg-gray-700 dark:text-white"
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
