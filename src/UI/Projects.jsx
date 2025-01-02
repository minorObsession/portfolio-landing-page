import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Wild Oasis",
    description:
      "SPA that allows hotel employees to manage hotel rooms (cabins), bookings and stays",
    previewImage: "fhifash",
    githb: "fahsashffffi",
    deploy: "https:gjfa",
    techStack: ["React", ""],
  },
  {
    title: "Food Fusion",
    description: "",
    previewImage: "fhifash",
    githb: "fahsashaaaai",
    deploy: "https:gjfas",
    techStack: ["React", ""],
  },
  {
    title: "Recipe Radar",
    description: "Recipe searching, bookmarking and meal-planning app",
    previewImage: "fhifash",
    githb: "fahsassagefafsafashi",
    deploy: "https://app.netlify.com/sites/reciperadarapp/",
    techStack: ["React", ""],
  },
  {
    title: "Solar Vibes",
    description: "",
    previewImage: "fhifash",
    githb: "fahsashsfsaafi",
    deploy: "https:gjfas",
    techStack: ["React", ""],
  },
];

function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl mb-4 text-accent font-semibold">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.githb}
            title={project.title}
            image={project.previewImage}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
