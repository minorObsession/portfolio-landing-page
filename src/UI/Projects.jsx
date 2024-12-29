import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl mb-4 text-accent font-semibold">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        <ProjectCard title="Wild Oasis" />
        <ProjectCard title="Solar Vibes" />
        <ProjectCard title="Food Fusion" />
        <ProjectCard title="Recipe Radar" />
        <ProjectCard title="Smart Piggy" />
      </div>
    </section>
  );
}

export default Projects;
