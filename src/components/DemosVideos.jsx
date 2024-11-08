const demoData = [
  {
    title: 'Welcome to my portfolio',
    videoUrl: 'https://www.youtube.com/embed/JoTcMPaIid0?rel=0&vq=hd1080',
    description: "I'm excited to connect and explore opportunities to contribute and collaborate in meaningful ways!",
    watchUrl: 'https://www.youtube.com/shorts/JoTcMPaIid0',
  },
  {
    title: 'CollabShop Demo',
    videoUrl: 'https://www.youtube.com/embed/lOPVi2oc-QE?rel=0&vq=hd1080',
    description: 'This is a demo for CollabShop: a Collaborative React Smart Shopping List Application.',
    watchUrl: 'https://www.youtube.com/watch?v=lOPVi2oc-QE',
  },
];

const DemosVideos = () => {
  return (
    <section
      id="demos-videos"
      className="max-w-screen-lg mx-auto md:pl-20 p-4 pb-8"
      aria-labelledby="demos-videos-title"
    >
      <h2
        id="demos-videos-title"
        className="text-4xl font-bold text-[#001b5e] dark:text-blue-200 mb-8 mt-0 text-center"
        tabIndex="0" 
      >
        Demos & Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {demoData.map((demo, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="300"
              src={demo.videoUrl}
              title={`Video demo for ${demo.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md mb-4"
            ></iframe>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{demo.title}</h3>
            <p className="text-gray-700 dark:text-gray-400 my-2">
              {demo.description}
            </p>
            <a
              href={demo.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label={`Watch ${demo.title} on YouTube`} 
            >
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemosVideos;
