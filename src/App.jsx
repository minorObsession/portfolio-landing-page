// import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div id="root">
      <header className="header">
        <ul className="nav-links">
          <li>
            <a href="#landing">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>

      <section id="landing" className="landing">
        <img src="avatar.jpg" alt="Avatar" className="avatar" />
        <h1>Welcome to My Portfolio</h1>
        <p>Web developer passionate about creating amazing UIs</p>
      </section>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="card">Project 1</div>
          <div className="card">Project 2</div>
          <div className="card">Project 3</div>
          <div className="card">Project 4</div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <span>HTML, CSS, JavaScript</span>
          <span>React, Node.js, Express</span>
          <span>MongoDB, PostgreSQL</span>
          <span>Git, GitHub, CI/CD</span>
        </div>
      </section>

      <section id="tech-stack" className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <img src="html5.svg" alt="HTML5" />
          <img src="css3.svg" alt="CSS3" />
          <img src="js.svg" alt="JavaScript" />
          <img src="react.svg" alt="React" />
          <img src="nodejs.svg" alt="Node.js" />
          <img src="mongo.svg" alt="MongoDB" />
        </div>
      </section>
    </div>
  );
}

export default App;
