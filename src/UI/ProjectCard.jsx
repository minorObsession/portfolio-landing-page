import { useState, useRef } from "react";

import TechIcons2Lines from "./TechIcons2Lines";
import GitAndDeploy from "./GitAndDeploy";
import ImageSlider from "./ImageSlider";

function ProjectCard({
  title,
  imagesArray,
  description,
  gitHub,
  techStackArray,
  deployedLink,
}) {
  const [isHovered, setIsHovered] = useState(true);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      if (cardRef.current) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            cardRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center", // Center it in viewport
            });
          }, 500); // Matches the transition duration (700ms) but slightly earlier
        });
      }
    }, 100);
  };
  // * DON'T USE PIXELS
  return (
    //!  Main container for the project card
    <article
      ref={cardRef}
      className={`relative bg-gray-800 p-4 rounded-md text-center cursor-pointer shadow-md transition-all duration-700 ease-in-out ${
        isHovered
          ? "scale-105 shadow-xl shadow-accent font-bold tracking-wide h-[600px]"
          : "shadow-lg shadow-accent font-normal tracking-normal h-[110px]"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setTimeout(() => setIsHovered(false), 500)}
    >
      {/* // ! Title of the project */}
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      {!isHovered && (
        // ! Message prompting the user to hover over the card
        <span className="italic text-gray-400">Hover to see more details</span>
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
          <div className="flex flex-col gap-5 p-4 bg-gray-800 rounded-md">
            <p className="mt-2">{description || "Description about app..."}</p>
            <GitAndDeploy gitHub={gitHub} deployedLink={deployedLink} />

            <ImageSlider images={imagesArray} />

            <p className="mb-[-6px] italic">Built using:</p>
            <TechIcons2Lines icons={techStackArray} multipleLines={true} />
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
