import { useState } from "react";
import iconsConfig from "../config/iconsConfig";

// ! IT CAN BE REFACTORED TO BE MORE REUSABLE
function TechIconsLine({
  techs,
  hoveredTech,
  setHoveredTech,
  top = false,
  multipleLines,
}) {
  return (
    <div className="flex justify-center mt-4 gap-8 flex-wrap relative grow-0">
      {techs.map((tech) => (
        <span
          key={tech}
          className="flex items-center justify-center bg-gray-700 p-2 rounded-full scale-150 relative"
          onMouseEnter={() => setHoveredTech(tech)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          {iconsConfig[tech]?.icon || tech}
          {/* Tooltip */}
          {hoveredTech === tech && (
            <span
              className={`absolute ${
                top ? "top-[-30px]" : "bottom-[-30px]"
              } bg-gray-900 text-white text-xs p-1 rounded shadow-lg whitespace-nowrap z-[100]`}
            >
              {iconsConfig[tech].name || tech}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

// ! IT CAN BE REFACTORED TO BE MORE REUSABLE
function TechIcons2Lines({ icons, multipleLines = false }) {
  const [hoveredTech, setHoveredTech] = useState(null);

  if (!multipleLines)
    return (
      <TechIconsLine
        techs={icons}
        top={true}
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
      />
    );
  // Calculate the midpoint to split icons into two halves
  const midIndex = Math.ceil(icons.length / 2);
  const firstLineTechs = icons.slice(0, midIndex);
  const secondLineTechs = icons.slice(midIndex);

  return (
    <div className="flex flex-col gap-5">
      {/* First line of icons */}
      <TechIconsLine
        multipleLines={multipleLines}
        top={true}
        techs={firstLineTechs}
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
      />

      {/* Second line of icons */}
      <TechIconsLine
        multipleLines={multipleLines}
        techs={secondLineTechs}
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
      />
    </div>
  );
}

export default TechIcons2Lines;
