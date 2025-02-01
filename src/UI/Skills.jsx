// src/UI/Skills.jsx
import iconsConfig from "../config/iconsConfig";
import TechIcons from "./TechIcons";

function Skills() {
  const skills = Object.keys(iconsConfig);

  return (
    <section
      id="skills"
      className="p-8 text-center bg-gradient-to-r from-accentSecondary to-accentTertiary"
    >
      <h2 className="text-2xl mb-4">Web Skills & Tech </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <TechIcons key={index} icons={[skill]} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
