import SkillTag from "./SkillTag";

function Skills() {
  const skills = [
    "HTML, CSS, JavaScript",
    "React, Node.js, Express",
    "MongoDB, PostgreSQL",
    "Git, GitHub, CI/CD",
  ];

  return (
    <section
      id="skills"
      className="p-8 
 text-center"
    >
      <h2 className="text-2xl mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </div>
    </section>
  );
}

export default Skills;
