import { useEffect, useState } from "react";
import "../css/About.css";
import { FaReact, FaCode, FaLaptopCode } from "react-icons/fa";
import ProfilePhoto from "../assets/ream.png"; // <- add your photo in assets folder

function About() {
  // Stats counters
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [passion, setPassion] = useState(0);

  useEffect(() => {
    let y = 0, p = 0, pa = 0;
    const interval = setInterval(() => {
      if (y < 2) y++;
      if (p < 10) p++;
      if (pa < 100) pa += 5;

      setYears(y);
      setProjects(p);
      setPassion(pa);

      if (y === 2 && p === 10 && pa >= 100) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT: Text + Stats */}
        <div className="about-left">
          <h2>About Me</h2>
          <h3>Frontend Developer & UI/UX Enthusiast</h3>

          <p>
            I’m <span>Ream</span>, a passionate frontend developer who enjoys
            building modern, responsive, and user-friendly web applications.
            I focus on <strong>clean design</strong>, performance, and great UX.
          </p>

          <p>
            I work mainly with <strong>React, JavaScript, HTML, CSS</strong>.  
            I also have experience in <strong>PHP, databases, Figma, Docker, AWS</strong>.  
            Soft skills: <strong>teamwork, problem-solving, time management</strong>.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-card">
              <h4>{years}+</h4>
              <p>Years Learning</p>
            </div>
            <div className="stat-card">
              <h4>{projects}+</h4>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <h4>{passion}%</h4>
              <p>Passion</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Photo + Cards */}
        <div className="about-right">
          <div className="profile-photo">
            <img src={ProfilePhoto} alt="Ream Profile" />
          </div>

          <div className="about-cards">
            <div className="card">
              <FaCode />
              <h4>Clean Code</h4>
              <p>Readable, maintainable, scalable code.</p>
            </div>

            <div className="card">
              <FaReact />
              <h4>React Development</h4>
              <p>Modern SPAs with reusable components.</p>
            </div>

            <div className="card">
              <FaLaptopCode />
              <h4>Responsive Design</h4>
              <p>Works perfectly on all devices.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
