function Landing() {
  return (
    <section
      id="landing"
      className="p-4 lg:p-8 text-center flex flex-col lg:flex-row items-center justify-around min-h-screen"
    >
      {/* Main content container */}
      <div className="flex-1 ml-4 sm:ml-12 lg:ml-20 text-left font-bold max-w-[60vw]">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-7 lg:leading-loose">
          I&apos;m Bogdan - React web developer
        </h1>
        {/* Subheading/Description */}
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-1 lg:mt-3 lg:leading-10">
          Welcome to my portfolio! I specialize in building responsive web
          applications using latest web technologies
        </p>
        {/* Buttons container */}
        <div className="mt-6">
          {/* View Portfolio Button */}
          <button
            // ! apply smooth scrolling
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#projects"
            className="bg-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-accent-dark transition duration-300"
          >
            View My Portfolio
          </button>
          {/* Download Resume Button */}
          <button className="bg-transparent border border-accent text-accent py-2 px-4 rounded-full shadow-md hover:bg-accent hover:text-white transition duration-300 ml-4">
            Download Resume
          </button>
        </div>
        {/* Social media links container */}
        <div className="mt-6 flex space-x-4">
          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          {/* Twitter Link */}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>
      {/* Avatar image container */}
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
