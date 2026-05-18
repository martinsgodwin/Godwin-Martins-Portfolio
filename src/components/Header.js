import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/Header.css';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo/Brand */}
        <div className="logo">
          <span className="logo-text">Godwin Martins</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaTwitter />
          </a>
          <a href="mailto:your.email@example.com" className="icon-link">
            <MdEmail />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Mobile Sidebar Navigation */}
      <nav className={`sidebar-nav ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <FaTimes className="close-icon" onClick={closeSidebar} />
        </div>
        <ul className="sidebar-nav-links">
          <li><a href="#home" onClick={closeSidebar}>Home</a></li>
          <li><a href="#about" onClick={closeSidebar}>About</a></li>
          <li><a href="#projects" onClick={closeSidebar}>Projects</a></li>
          <li><a href="#skills" onClick={closeSidebar}>Skills</a></li>
          <li><a href="#contact" onClick={closeSidebar}>Contact</a></li>
        </ul>
        <div className="sidebar-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
            <FaTwitter />
          </a>
          <a href="mailto:your.email@example.com" className="sidebar-icon">
            <MdEmail />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
