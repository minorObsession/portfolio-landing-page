function ProjectCard({ title }) {
  return (
    <article className="bg-gray-800 p-4 rounded-md text-center hover:scale-105 cursor-pointer shadow-md hover:shadow-lg  transition-shadow hover:shadow-accent hover:font-bold hover:tracking-wide">
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      {/* You can add a description or preview image here */}
    </article>
  );
}

export default ProjectCard;
