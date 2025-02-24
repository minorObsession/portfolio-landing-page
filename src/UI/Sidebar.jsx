import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Sidebar() {
  // ! depending on innerWidth, render different JSX
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <aside className="flex gap-2.5 items-center max-w-12 text-nowrap justify-center lg:justify-start lg:flex-col lg:absolute lg:h-screen lg:left-5 lg:mx-auto lg:translate-y-[-55%] ">
      {/* // ! LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/bogdanterzic95/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      {/* // ! GitHub Link */}
      <a
        href="https://github.com/minorObsession"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      {/* // ! Facebook Link */}
      <a
        href="https://www.facebook.com/terzinjoo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <p className="transform rotate-270 translate-y-[250%]">
        connect with me →
      </p>
    </aside>
  );
}

export default Sidebar;
