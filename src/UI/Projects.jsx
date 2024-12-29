function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-stone-50 text-2xl mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-md text-stone-50 text-center hover:scale-105 transition">
          Project 1
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-stone-50 text-center hover:scale-105 transition">
          Project 2
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-stone-50 text-center hover:scale-105 transition">
          Project 3
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-stone-50 text-center hover:scale-105 transition">
          Project 4
        </div>
      </div>
    </section>
  );
}

export default Projects;
