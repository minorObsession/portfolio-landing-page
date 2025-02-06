import { useState, useRef } from "react";
import TechIcons from "./TechIcons";
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
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      if (cardRef.current) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            cardRef.current.scrollIntoView({
              behavior: "smooth",
              // block: "center", // Center it in viewport
            });
          }, 500); // Matches the transition duration (700ms) but slightly earlier
        });
      }
    }, 200);
  };

  return (
    <article
      ref={cardRef}
      className={`scroll-mt-40 transition-all duration-700 ease-in-out relative bg-gray-800 p-4 rounded-md text-center cursor-pointer shadow-md 
    ${
      isHovered
        ? "scale-105 shadow-xl shadow-accent font-bold tracking-wide h-[600px]"
        : "h-[110px]"
    }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      {!isHovered && (
        <span className="text-gray-400 italic">Hover to see more details</span>
      )}

      <div
        className={`absolute inset-0 p-2 transition-all duration-700 ease-in-out ${
          isHovered
            ? "opacity-100 h-[600px] overflow-visible pt-[3rem]"
            : "opacity-0 h-[110px] pointer-events-none"
        }`}
      >
        {isHovered && (
          <div className="flex flex-col gap-5 bg-gray-800 p-4 rounded-md">
            <p className="mt-2">{description || "Description about app..."}</p>
            <GitAndDeploy gitHub={gitHub} deployedLink={deployedLink} />
            <ImageSlider images={imagesArray} />
            <p className="mb-[-6px] italic">Built using:</p>
            <TechIcons icons={techStackArray} />
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
