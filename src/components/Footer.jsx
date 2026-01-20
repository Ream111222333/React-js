import "../css/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaArrowUp,
  FaHome,
  FaUser,
  FaServicestack,
  FaEnvelope,
  FaMapMarkerAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaArrowDown
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-brand">
          <h3>Ream<span>App</span></h3>
          <p>
            Frontend Developer focused on building clean, responsive, and
            high-performance web applications using modern technologies.
          </p>

          <div className="footer-info">
            <p><FaMapMarkerAlt /> Cambodia</p>
            <p><FaEnvelope /> reamkhorn12345@gmail.com</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home"><FaHome /> Home</a>
          <a href="#about"><FaUser /> About</a>
          <a href="#services"><FaServicestack /> Services</a>
          <a href="#contact"><FaEnvelope /> Contact</a>
        </div>

        {/* Skills */}
        <div className="footer-skills">
          <h4>Tech Stack</h4>
          <div className="skills-icons">
            <span><FaHtml5 /> HTML5</span>
            <span><FaCss3Alt /> CSS3</span>
            <span><FaJs /> JavaScript</span>
            <span><FaReact /> React</span>
          </div>
          <p className="availability">
            💼 Available for freelance & junior frontend roles
          </p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href=""><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ream React App. All rights reserved.</p>

        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
