import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa';
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
            <p>A passionate Frontend Developer dedicated to building elegant, responsive, and user-focused web applications using React, Next.JS and modern web tools.</p>
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
              <a href="https://github.com/Godwin-Martins" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/godwin-martins-67597a396" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/2349071602631" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaWhatsapp />
              </a>
              <a href="mailto:martinsgodwin442@gmail.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
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
