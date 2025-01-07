// src/UI/Skills.jsx
import SkillTag from "./SkillTag";
import IconsIn2Rows from "./IconsIn2Rows";
import iconsConfig from "../config/iconsConfig";

function Skills() {
  const skills = Object.keys(iconsConfig);

  return (
    <section
      id="skills"
      className="p-8 text-center bg-gradient-to-r from-accentSecondary to-accentTertiary"
    >
      <h2 className="text-2xl mb-4">Web Skills & Tech </h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {skills.map((skill, index) => (
          <SkillTag key={index}>
            <IconsIn2Rows icons={[skill]} />
          </SkillTag>
        ))}
      </div>
    </section>
  );
}

export default Skills;
