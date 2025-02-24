function Landing() {
  function scrollToProjects(e) {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="landing"
      className="grid grid-rows-[3fr_1fr] min-h-screen grid-cols-1  gap-8 text-center border-b-2 item justify-centers-center lg:gap-0 min-w-screen lg:grid-cols-2 border-b-amber-400"
    >
      {/* // ! RIGHT SIDE */}
      <article className="flex flex-col items-center justify-center grow lg:h-screen lg:col lg:order-1">
        {/* // ! image div */}
        <div className="w-[90%] h-[90%] mx-auto ">
          <img src="/b1.jpg" className="object-cover w-full h-full" />
        </div>
      </article>

      {/* // ! LEFT SIDE */}
      <article className="flex items-center justify-center lg:col grow lg:h-screen lg:order-2 ">
        <div className="md:max-w-[80%]">
          {/* // ! I'm Bogdan */}
          <h1 className="text-xl font-bold leading-7 md:text-4xl lg:text-5xl lg:leading-normal ">
            I&apos;m Bogdan - React developer
          </h1>
          {/* // ! What do I do */}
          <p className=" md:text-2xl lg:text-3xl">
            I love building responsive web apps
          </p>

          {/* // ! View Portfolio Button */}
          <button
            // ! apply smooth scrolling
            onClick={scrollToProjects}
            href="#projects"
            className="transition duration-300 rounded-full shadow-md "
          >
            View My Portfolio
          </button>
          {/* // ! Download Resume Button */}
          <button className="px-4 py-2 transition duration-300 bg-transparent border rounded-full shadow-md hover:text-white">
            Download Resume PDF
          </button>
        </div>
      </article>
    </section>
  );
}

export default Landing;

// ! another option for photo
// <div className="w-full h-full p-6">
// <img src="/background.jpg" className="object-cover w-full" />
// </div>

// ! for padding around photo
// <div className="w-[90%] h-[90%] mx-auto p-6">
// <img src="/background.jpg" className="object-cover w-full h-full" />
// </div>
