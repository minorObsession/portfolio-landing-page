function Skills() {
  return (
    <section id="skills" className="p-8 bg-gray-900 text-stone-50 text-center">
      <h2 className="text-2xl mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-gray-700 px-4 py-2 rounded-full">
          HTML, CSS, JavaScript
        </span>
        <span className="bg-gray-700 px-4 py-2 rounded-full">
          React, Node.js, Express
        </span>
        <span className="bg-gray-700 px-4 py-2 rounded-full">
          MongoDB, PostgreSQL
        </span>
        <span className="bg-gray-700 px-4 py-2 rounded-full">
          Git, GitHub, CI/CD
        </span>
      </div>
    </section>
  );
}

export default Skills;
