import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Icons for GitHub, LinkedIn, Email


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© 2025 Khushi Vijay. All rights reserved.</p>

        <div className="social-icons">
          <a href="mailto:khushivj30@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/khushi-vijay-313022feb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/k-hushivijay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
