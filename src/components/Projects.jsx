import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
 // CSS shown below

// Replace these imports with your real image imports
import mainCloneImg from "../assets/Images/main-clone-preview.png";
import softShellImg from "../assets/Images/soft-shell-preview.png";

// Particle sticker images (place small icon PNGs in public or assets)
const particleImages = [
  { src: "/assets/icons/react-icon.png", width: 32, height: 32 },
  { src: "/assets/icons/js-icon.png", width: 30, height: 30 },
  { src: "/assets/icons/figma-icon.png", width: 34, height: 34 },
  { src: "/assets/icons/code-icon.png", width: 30, height: 30 },
];

const projects = [
  {
    name: "Main Clone",
    github: "https://github.com/k-hushivijay/Main-clone.git",
    live: "https://main-clone.vercel.app/",
    image: mainCloneImg,
    tags: ["React", "Responsive", "Auth"],
  },
  {
    name: "Soft Shell Marketing",
    github: "https://github.com/k-hushivijay/Soft-shell-marketing.git",
    live: "https://assignment-six-azure.vercel.app/",
    image: softShellImg,
    tags: ["HTML", "CSS", "Figma"],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 80, rotate: -6, scale: 0.98 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 15, delay: i * 0.18 },
  }),
};

const Projects = () => {
  const particlesInit = useCallback(async (engine) => {
    // load tsparticles full bundle
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // optional: do something after particles load
  }, []);

  return (
    <section
      id="projects"
      className="projects-section"
      onMouseMove={(e) => {
        // reactive spotlight: set CSS variables (clientX/Y relative to section)
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--mx", `${x}px`);
        e.currentTarget.style.setProperty("--my", `${y}px`);
      }}
    >
      {/* Particles (stickers) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 8, density: { enable: false } },
            move: {
              enable: true,
              speed: 0.9,
              direction: "top",
              outModes: { default: "out" },
              random: true,
              straight: false,
            },
            opacity: { value: 0.9, random: { enable: true, minimumValue: 0.4 } },
            rotate: { value: { min: 0, max: 360 }, animation: { enable: true, speed: 5 } },
            shape: {
              type: "image",
              image: particleImages,
            },
            size: { value: { min: 20, max: 38 }, random: true },
            wobble: { enable: true, distance: 6, speed: 2 },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: false },
              resize: true,
            },
            modes: {
              repulse: { distance: 80 },
            },
          },
        }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Spotlight overlay (reactive) */}
      <div className="spotlight" aria-hidden />

      <h2 className="projects-title">Selected Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.name}
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.06, rotate: 0.7 }}
            role="article"
            aria-label={`Project ${project.name}`}
          >
            <div className="project-media">
              <img src={project.image} alt={`${project.name} preview`} className="project-image" />
              <div className="card-ribbon">
                <span>{index === 0 ? "Featured" : "Featured"}</span>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </p>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Creative footer microcopy */}
      <div className="projects-footer">
        <small>Hover cards • Move mouse to highlight • Click demos to explore</small>
      </div>
    </section>
  );
};

export default Projects;
