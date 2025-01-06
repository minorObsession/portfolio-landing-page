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
  const [isHovered, setIsHovered] = useState(true);

  return (
    <article
      className={`bg-gray-800 p-4 rounded-md text-center cursor-pointer shadow-md transition-all duration-700 ease-in-out ${
        isHovered
          ? "max-h-[700px] scale-105 shadow-xl shadow-accent font-bold tracking-wide"
          : "max-h-[90px] shadow-lg shadow-accent font-normal tracking-normal"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ overflow: "hidden" }}
    >
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      {!isHovered && (
        <span className="text-gray-400 italic">Hover to see more details</span>
      )}
      {/* // ! div that opens on hover */}
      <div
        className={`p-2 transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {isHovered && (
          // ! when hovered

          <div className="flex flex-col gap-5">
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
