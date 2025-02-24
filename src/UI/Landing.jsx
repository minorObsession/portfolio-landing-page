function Landing() {
  function scrollToProjects(e) {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="landing"
      className="flex flex-col items-center justify-around min-h-screen p-4 text-center lg:p-8 lg:flex-row"
    >
      {/* // ! Main content container */}
      <div className="flex-1 ml-4 sm:ml-12 lg:ml-20 text-left font-bold max-w-[60vw]">
        {/* // ! Heading */}
        <h1 className="text-xl leading-7 sm:text-2xl md:text-3xl lg:text-5xl lg:leading-loose">
          I&apos;m Bogdan - React web developer
        </h1>
        {/* // ! Subheading/Description */}
        <p className="mt-1 text-base sm:text-xl md:text-2xl lg:text-3xl lg:mt-3 lg:leading-10">
          Welcome to my portfolio! I specialize in building responsive web
          applications using latest web technologies
        </p>
        {/* // ! Buttons container */}
        <div className="mt-6">
          {/* // ! View Portfolio Button */}
          <button
            // ! apply smooth scrolling
            onClick={scrollToProjects}
            href="#projects"
            className="px-4 py-2 text-white transition duration-300 rounded-full shadow-md bg-accent hover:bg-accent-dark"
          >
            View My Portfolio
          </button>
          {/* // ! Download Resume Button */}
          <button className="px-4 py-2 ml-4 transition duration-300 bg-transparent border rounded-full shadow-md border-accent text-accent hover:bg-accent hover:text-white">
            Download Resume
          </button>
        </div>
        {/* // ! Social media links container */}
        <div className="flex mt-6 space-x-4">
          {/* // ! LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          {/* // ! GitHub Link */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          {/* // ! Twitter Link */}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>
      {/* // ! Avatar image container */}
      <div className="flex-shrink-0 mx-2 mt-4 lg:mt-0">
        <img
          src="/boci-slika.png"
          alt="Bogdan's Avatar"
          className="w-32 h-32 rounded-full md:w-48 md:h-48 lg:w-64 lg:h-64"
        />
      </div>
    </section>
  );
}

export default Landing;
