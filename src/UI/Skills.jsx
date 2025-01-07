import SkillTag from "./SkillTag";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import {
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiBootstrap,
  SiStyledcomponents,
  SiSupabase,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";
import IconsIn2Rows from "./IconsIn2Rows";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "Git", icon: <FaGit color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#181717" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "Tanstack React Query", icon: <SiReactquery color="#FF4154" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Styled Components", icon: <SiStyledcomponents color="#DB7093" /> },
    { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
    { name: "Jest", icon: <SiJest color="#C21325" /> },
    {
      name: "React Testing Library",
      icon: <SiTestinglibrary color="#E33332" />,
    },
  ];

  return (
    <section
      id="skills"
      className="p-8 text-center bg-gradient-to-r from-accentSecondary to-accentTertiary"
    >
      <h2 className="text-2xl mb-4">Web Skills & Tech </h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {skills.map((skill, index) => (
          <SkillTag key={index}>
            <IconsIn2Rows icons={[skill.icon]} name={skill.name} />
          </SkillTag>
        ))}
      </div>
    </section>
  );
}

export default Skills;
