import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Wild Oasis",
      description: "SPA for managing hotel rooms (cabins), bookings and stays",
      previewImage: "/wild-oasis-preview/wildOasis1.png",
      gitHub: "https://github.com/minorObsession/the-wild-oasis",
      deploy: "https:gjfa",
      techStack: ["React", "HTML5", "Supabase", "React Query", "Redux Toolkit"],
    },
    {
      title: "Food Fusion",
      description:
        "Food ordering app for both Customers and Restaurant employees",
      previewImage: "/food-fusion-preview/FoodFusion1.png",
      gitHub: "https://github.com/minorObsession/food-fusion",
      deploy: "https://foodfusionapp.netlify.app/",
      techStack: [
        "React",
        "HTML5",
        "Styled Components",
        "React Query",
        "Supabase",
        "Redux Toolkit",
      ],
    },
    {
      title: "Recipe Radar",
      description: "Recipe searching, bookmarking and meal-planning app",
      previewImage: "fhifash",
      gitHub: "https://github.com/minorObsession/recipe-radar",
      deploy: "https://app.netlify.com/sites/reciperadarapp/",
      techStack: [
        "React",
        "HTML5",
        "Tailwind CSS",
        "React Query",
        "Redux Toolkit",
      ],
    },
    {
      title: "Solar Vibes",
      description: "",
      previewImage: "fhifash",
      gitHub: "https://github.com/chingu-voyages/v52-tier1-team-05/",
      deploy: "https:gjfas",
      techStack: ["React", "HTML5", "CSS3"],
    },
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl mb-4 text-accent font-semibold">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.gitHub}
            title={project.title}
            image={project.previewImage}
            description={project.description}
            gitHub={project.gitHub}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
