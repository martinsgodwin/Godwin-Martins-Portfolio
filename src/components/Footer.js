import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-section">
            <h3>Godwin Martins</h3>
            <p>Full Stack Developer | Creative Problem Solver</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaTwitter />
              </a>
              <a href="mailto:your.email@example.com" className="footer-icon">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by Godwin Martins © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
