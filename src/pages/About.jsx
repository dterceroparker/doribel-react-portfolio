import AboutItem from "../components/AboutItem";
import { jobs } from "../data/jobs-data";

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto p-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8"></div>
      <h1 className="text-4xl font-bold text-[#001b5e] dark:text-blue-200 mb-8 mt-0 text-center">
        <span className="sr-only">About</span> About Me
      </h1>
      <div className="space-y-8">
        {jobs.map((item, idx) => (
          <AboutItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default About;