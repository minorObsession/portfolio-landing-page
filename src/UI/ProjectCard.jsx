import { useState } from "react";

import IconsIn2Rows from "./IconsIn2Rows";
import GitAndDeploy from "./GitAndDeploy";
import ImageSlider from "./ImageSlider";

function ProjectCard({
  title,
  imagesArray,
  description,
  gitHub,
  techStack,
  deployedLink,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    //!  Main container for the project card
    <article
      className={`relative bg-gray-800 p-4 rounded-md text-center cursor-pointer shadow-md transition-all duration-700 ease-in-out ${
        isHovered
          ? "scale-105 shadow-xl shadow-accent font-bold tracking-wide h-[600px]"
          : "shadow-lg shadow-accent font-normal tracking-normal h-[110px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* // ! Title of the project */}
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      {!isHovered && (
        // ! Message prompting the user to hover over the card
        <span className="text-gray-400 italic">Hover to see more details</span>
      )}
      <div
        className={`absolute inset-0 p-2 transition-opacity duration-700 ease-in-out ${
          isHovered
            ? "opacity-100 overflow-visible pt-[3rem]"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {isHovered && (
          // ! Container for the detailed view of the project card
          <div className="flex flex-col gap-5 bg-gray-800 p-4 rounded-md">
            <p className="mt-2">{description || "Description about app..."}</p>
            <GitAndDeploy gitHub={gitHub} deployedLink={deployedLink} />

            <ImageSlider images={imagesArray} />

            <p className="mb-[-6px] italic">Built using:</p>
            <IconsIn2Rows icons={techStack} />
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
