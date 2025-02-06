// src/UI/Skills.jsx
import { allSkills } from "../config/iconsConfig";
import TechIcons2Lines from "./TechIcons2Lines";

function Skills() {
  return (
    <section
      id="skills"
      className="p-8 text-center bg-gradient-to-r from-accentSecondary to-accentTertiary"
    >
      <h2 className="text-2xl mb-4">Web Skills & Tech </h2>
      <div className="flex justify-center w-full">
        <TechIcons2Lines icons={allSkills} multipleLines={false} />
      </div>
    </section>
  );
}

export default Skills;
