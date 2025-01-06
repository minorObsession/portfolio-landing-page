import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Wild Oasis",
      description: "SPA for managing hotel rooms (cabins), bookings and stays",
      previewImages: [
        "/wild-oasis-preview/wildOasis1.png",
        "/wild-oasis-preview/wildOasis2.png",
        "/wild-oasis-preview/wildOasis3.png",
      ],
      gitHub: "https://github.com/minorObsession/the-wild-oasis",
      deploy: "https://the-wild-oasis-rho-bay.vercel.app/",
      techStack: [
        "React",
        "HTML5",
        "Styled Components",
        "Supabase",
        "React Query",
        "Redux Toolkit",
      ],
    },
    {
      title: "Food Fusion",
      description:
        "Food ordering app for both Customers and Restaurant employees",
      previewImages: [
        "/food-fusion-preview/FoodFusion1.png",
        "/food-fusion-preview/FoodFusion2.png",
        "/food-fusion-preview/FoodFusion3.png",
      ],
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
      previewImages: [
        "/recipe-radar-preview/RecipeRadar1.png",
        "/recipe-radar-preview/RecipeRadar2.png",
        "/recipe-radar-preview/RecipeRadar3.png",
      ],
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
      description: "Solar appointments app for customers and city employees",
      previewImages: [
        "/solar-vibez-preview/SolarVibes1.png",
        "/solar-vibez-preview/SolarVibes2.png",
        "/solar-vibez-preview/SolarVibes3.png",
      ],
      gitHub: "https://github.com/chingu-voyages/v52-tier1-team-05/",
      deploy: "https://solar-vibes-la.netlify.app/",
      techStack: ["JavaScript", "HTML5", "CSS3"],
    },
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl mb-4 text-accent font-semibold">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 lg:max-w-[80vw] mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.gitHub}
            title={project.title}
            imagesArray={project.previewImages}
            description={project.description}
            gitHub={project.gitHub}
            techStack={project.techStack}
            deployedLink={project.deploy}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
