import "../css/Headers.css";
// import heroBg from '../assets/.jpg'

function Headers() {
  return (
    <header className="hero">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <h1>
          Hi, I'm <span>Ream</span>
        </h1>
        <h2>Frontend Developer & UI Designer</h2>

        <p>
          I build <strong>modern, responsive, and user-friendly web applications</strong> 
          using <strong>React, JavaScript, HTML, CSS</strong>, while focusing on clean UI and UX design.
        </p>

        <div className="hero-skills">
          <span>💻 Web Development</span>
          <span>🎨 UI / UX Design</span>
          <span>⚙️ DevOps & Deployment</span>
          <span>📈 Problem Solving & Teamwork</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            🚀 View Projects
          </a>

          <a href="#contact" className="btn outline">
            ✉️ Contact Me
          </a>

          <a href="#resume" className="btn ghost">
            📄 Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Headers;

