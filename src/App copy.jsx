// import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div id="root" className="bg-background mx-auto text-center w-full h-full">
      {/* // ! HEADER */}
      <header className="sticky top-0 uppercase bg-backgroundDarker bg-opacity-50 p-4 z-10">
        {/* //  ! navigation */}
        <ul className="flex justify-center gap-6">
          <li>
            <a
              href="#landing"
              className="text-stone-50 hover:text-accent transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-stone-50 hover:text-accent transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-stone-50 hover:text-accent transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </header>

      {/* // ! LANDING SECTION */}
      <section
        id="landing"
        className="p-4 lg:p-8 text-center flex items-center"
      >
        <div className="flex-shrink-0 mx-auto mb-4">
          <img
            src="../public/boci-slika.png"
            alt="Avatar"
            className="w-32 h-32 rounded-full lg:w-48 lg:h-48 "
          />
        </div>
        <div className="flex-1 ml-2">
          <h1 className="text-stone-50 text-3xl">Welcome to My Portfolio</h1>
          <p className="text-stone-300">
            Web developer passionate about creating amazing UIs
          </p>
        </div>
      </section>

      {/* // ! PROJECTS SECTION */}
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

      {/* // ! SKILLS SECTION */}
      <section
        id="skills"
        className="p-8 bg-gray-900 text-stone-50 text-center"
      >
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

      {/* // ! TECH STACK SECTION */}
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
    </div>
  );
}

export default App;
