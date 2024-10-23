const demoData = [
  {
    title: 'CollabShop Demo',
    videoUrl: 'https://www.youtube.com/embed/Z5s6ttxRD2M',
    description: 'This is a demo for CollabShop: a Collaborative React Smart Shopping List Application.',
  },
];

const DemosVideos = () => {
  return (
    <section
      id="demos-videos"
      className="max-w-screen-lg mx-auto md:pl-20 p-4 pb-8"
      aria-labelledby="demos-videos-title"
    >
      <h1
        id="demos-videos-title"
        className="text-4xl font-bold text-[#001b5e] dark:text-blue-200 mb-8 mt-0 text-center"
      >
        Demos & Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {demoData.map((demo, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="300"
              src={demo.videoUrl}
              title={demo.title}
              frameBorder="0"
              allowFullScreen
              className="rounded-md mb-4"
            ></iframe>
            <h3 className="text-2xl font-semibold">{demo.title}</h3>
            <p className="text-gray-700 dark:text-gray-400 my-2">
              {demo.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemosVideos;
