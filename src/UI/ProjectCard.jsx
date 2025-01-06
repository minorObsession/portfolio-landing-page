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
    <article
      className={`relative bg-gray-800 p-4 rounded-md text-center cursor-pointer shadow-md transition-all duration-700 ease-in-out ${
        isHovered
          ? "scale-105 shadow-xl shadow-accent font-bold tracking-wide "
          : "shadow-lg shadow-accent font-normal tracking-normal"
      }`}
      style={{ height: isHovered ? "600px" : "110px" }} // Adjust the height as needed
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      {!isHovered && (
        <span className="text-gray-400 italic">Hover to see more details</span>
      )}
      <div
        className={`absolute inset-0 p-2 transition-opacity duration-700 ease-in-out ${
          isHovered
            ? "opacity-100 overflow-visible"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "3rem" }} // Adjust padding to ensure h3 stays in place
      >
        {isHovered && (
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
