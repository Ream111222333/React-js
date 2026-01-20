import { FaHome, FaUser, FaLaptopCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";

import '../css/Nabar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span>Ream</span><span className="accent">Khorn</span>
        </div>

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
          <a href="#contact" className="btn-nav">
            <FaEnvelope className="icon" /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
