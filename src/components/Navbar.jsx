import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaEnvelope,
  FaMoon,
  FaSun
} from "react-icons/fa";

import "../css/Nabar.css";

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span>Ream</span>
          <span className="accent">Khorn</span>
        </div>

        <div className="nav-actions">
          <div className="nav-links">
            <a href="#home" className="active">
              <FaHome className="icon" /> Home
            </a>
            <a href="#about">
              <FaUser className="icon" /> About
            </a>
            <a href="#services">
              <FaLaptopCode className="icon" /> Services
            </a>
            <a href="#projects">
              <FaFolderOpen className="icon" /> Projects
            </a>
          </div>

          <div className="nav-cta">
            <button
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <span className="toggle-icon">
                {isDark ? <FaMoon /> : <FaSun />}
              </span>
              <span className="toggle-label">
                {isDark ? "Dark" : "Light"}
              </span>
            </button>

            <a href="#contact" className="btn-nav">
              <FaEnvelope className="icon" /> Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
