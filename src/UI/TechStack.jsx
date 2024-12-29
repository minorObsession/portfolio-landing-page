function TechStack() {
  return (
    <section
      id="tech-stack"
      className="p-8 bg-gray-800 text-stone-50 text-center"
    >
      <h2 className="text-2xl mb-4">Tech Stack</h2>
      <div className="flex justify-center flex-wrap gap-4">
        <img
          src="html5.svg"
          alt="HTML5"
          className="w-10 h-10 grayscale hover:grayscale-0 transition"
        />
        <img
          src="css3.svg"
          alt="CSS3"
          className="w-10 h-10 grayscale hover:grayscale-0 transition"
        />
        <img
          src="js.svg"
          alt="JavaScript"
          className="w-10 h-10 grayscale hover:grayscale-0 transition"
        />
        <img
          src="react.svg"
          alt="React"
          className="w-10 h-10 grayscale hover:grayscale-0 transition"
        />
        <img
          src="nodejs.svg"
          alt="Node.js"
          className="w-10 h-10 grayscale hover:grayscale-0 transition"
        />
        <img
          src="mongo.svg"
          alt="MongoDB"
          className="w-10 h-10 grayscale hover:grayscale-0 transition"
        />
      </div>
    </section>
  );
}

export default TechStack;
