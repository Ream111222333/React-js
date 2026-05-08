import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaCode
} from "react-icons/fa";

import "../css/Nabar.css";

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="logo-icon"><FaCode /></span>
          <span className="logo-text">Ream</span>
          <span className="logo-accent">Khorn</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-dot"></span> Home
          </a>
          <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-dot"></span> About
          </a>
          <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-dot"></span> Services
          </a>
          <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-dot"></span> Projects
          </a>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? <FaMoon /> : <FaSun />}
          </button>

          <a href="#contact" className="btn-nav" onClick={() => setIsMobileMenuOpen(false)}>
            <FaEnvelope /> Contact
          </a>

          <button
            className="mobile-menu-toggle"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}><FaHome /> Home</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}><FaUser /> About</a>
        <a href="#services" onClick={() => setIsMobileMenuOpen(false)}><FaLaptopCode /> Services</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}><FaFolderOpen /> Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;
