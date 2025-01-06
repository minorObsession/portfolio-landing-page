function Landing() {
  return (
    <section
      id="landing"
      className="p-4 lg:p-8 text-center flex flex-col lg:flex-row items-center justify-around min-h-screen"
    >
      <div className="flex-1 ml-4 sm:ml-12 lg:ml-20 text-left font-bold max-w-[60vw]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-7 lg:leading-loose">
          I&apos;m Bogdan - passionate React developer
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-1 lg:mt-3">
          Welcome to my portfolio! I specialize in building responsive web
          applications using latest web technologies
        </p>
        <div className="mt-6">
          <button
            // ! apply smooth scrolling
            onClick={() => (window.location.href = "#projects")}
            href="#projects"
            className="bg-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-accent-dark transition duration-300"
          >
            View My Portfolio
          </button>
          <button className="bg-transparent border border-accent text-accent py-2 px-4 rounded-full shadow-md hover:bg-accent hover:text-white transition duration-300 ml-4">
            Download Resume
          </button>
        </div>
        <div className="mt-6 flex space-x-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="flex-shrink-0 mx-2 mt-4 lg:mt-0">
        <img
          src="/boci-slika.png"
          alt="Bogdan's Avatar"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full"
        />
      </div>
    </section>
  );
}

export default Landing;
