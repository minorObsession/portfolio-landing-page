import { GiHamburgerMenu } from "react-icons/gi";

function Landing() {
  function scrollToProjects(e) {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="landing"
      className="grid grid-rows-[2fr_1.5fr] h-screen grid-cols-1 text-center lg:grid-cols-2  "
    >
      <div className="absolute top-4 left-4 bg-black ">
        <GiHamburgerMenu />
      </div>
      {/* // ! RIGHT SIDE */}
      <article className="flex flex-col items-center justify-center grow h-full lg:h-screen lg:order-2 ">
        {/* // ! image div */}
        <div className="w-[95%] h-[95%]  ">
          <img
            src="/b1.jpg"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </article>

      {/* // ! LEFT SIDE */}
      <article className="flex items-center justify-center grow lg:h-screen lg:order-1 ">
        <div className="md:max-w-[75%]">
          {/* // ! I'm Bogdan */}
          <h1 className="text-3xl font-bold leading-7 md:text-4xl lg:text-5xl lg:leading-normal ">
            I&apos;m Bogdan - React developer
          </h1>
          {/* // ! What do I do */}
          <p className="text-xl font-semibold md:text-2xl lg:text-3xl">
            I love building responsive web apps
          </p>
          <div className="text-lg md:text-xl lg:text-2xl">
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
            <button className="px-4 py-2 transition duration-300 border rounded-full shadow-md ">
              Download Resume PDF
            </button>
          </div>
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
