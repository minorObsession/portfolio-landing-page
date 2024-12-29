function ProjectCard({ title }) {
  // ! IDEA - when hovering a card display details- image text preview
  return (
    <article className="bg-gray-800 p-4 rounded-md text-center hover:scale-105 cursor-pointer transition">
      {title}
    </article>
  );
}

export default ProjectCard;
