import { useState } from "react";

import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiSupabase,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

const techIcons = {
  React: <FaReact style={{ color: "#61DAFB" }} />, // React's official color
  HTML5: <FaHtml5 style={{ color: "#E34F26" }} />, // HTML5 orange
  CSS3: <FaCss3Alt style={{ color: "#1572B6" }} />, // CSS3 blue
  Supabase: <SiSupabase style={{ color: "#3ECF8E" }} />, // Supabase green
  "Redux Toolkit": <SiRedux style={{ color: "#764ABC" }} />, // Redux purple
  "React Query": <SiRedux style={{ color: "#FF4154" }} />, // Example color for React Query
  "Tailwind CSS": <SiTailwindcss style={{ color: "#38BDF8" }} />, // Tailwind blue
  "Styled Components": <SiStyledcomponents style={{ color: "#DB7093" }} />, // Styled Components pink
};

function ProjectCard({ title, image, description, gitHub, techStack }) {
  const [isHovered, setIsHovered] = useState(true);
  console.log(techStack);

  return (
    <article
      className={`bg-gray-800 p-4 rounded-md text-center cursor-pointer shadow-md transition-all duration-500 ease-in-out ${
        isHovered
          ? "max-h-[700px] scale-105 shadow-xl shadow-accent font-bold tracking-wide"
          : "max-h-[200px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-accent">{title}</h3>

      {/* // ! div that opens on hover */}
      <div className="p-2 transition-opacity duration-500 ease-in-out">
        {isHovered ? (
          // ! when hovered
          <div className="flex flex-col gap-6 ">
            <p className="mt-2">{description || "Description about app..."}</p>
            <img
              src={image}
              alt={`${title} preview`}
              className="rounded-md  px-3"
            />
            {/*  // ! icons div */}
            <div className="flex justify-center mt-4 gap-6">
              {techStack.map((tech) => (
                // * REFACTOR INTO SEPARATE COMPONENT
                <span
                  key={tech}
                  className="flex items-center justify-center bg-gray-700 p-2 rounded-full scale-150 "
                >
                  {techIcons[tech] || tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          // ! when not hovered
          <>
            <div className="mt-2">
              <p className="mb-1">{description}</p>
              <span className="text-gray-400 italic">
                Hover to see more details
              </span>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
