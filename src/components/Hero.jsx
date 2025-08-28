import React from 'react';
import heroBg from '../assets/Images/IMG-20240908-WA0014.jpg'; // adjust path if needed

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Hello, I'm <span>Khushi Vijay</span></h1>
        <h2>Aspiring Full Stack Web Developer</h2>
        <p>
          I’m a Computer Science graduate passionate about creating interactive,
          user-friendly web applications. I love building creative digital experiences
          and enhancing UI with clean code and smooth design.
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
