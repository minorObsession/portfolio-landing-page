// src/UI/Skills.jsx
import { allSkills } from "../config/iconsConfig";
import TechIcons2Lines from "./TechIcons2Lines";

function Skills() {
  return (
    <section id="skills" className="p-8 text-center">
      <h2 className="mb-4 text-2xl">Web Skills & Tech </h2>
      <TechIcons2Lines icons={allSkills} />

      <div className="flex justify-center w-full"></div>
    </section>
  );
}

export default Skills;
