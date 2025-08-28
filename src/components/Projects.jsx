import React from "react";

import mainCloneImg from "../assets/Images/main-clone-preview.png";
import softShellImg from "../assets/Images/soft-shell-preview.png";

const projects = [
  {
    name: "Main Clone",
    github: "https://github.com/k-hushivijay/Main-clone.git",
    live: "https://main-clone.vercel.app/",
    image: mainCloneImg,
  },
  {
    name: "Soft Shell Marketing",
    github: "https://github.com/k-hushivijay/Soft-shell-marketing.git",
    live: "https://assignment-six-azure.vercel.app/",
    image: softShellImg,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.name}</h3>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
