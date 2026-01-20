import { useState, useEffect } from "react";
import "../css/Project.css";

function Projects() {
  // Animated skill bars
  const [html, setHtml] = useState(0);
  const [reactSkill, setReactSkill] = useState(0);
  const [php, setPhp] = useState(0);
  const [ux, setUx] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setHtml(count > 95 ? 95 : count);
      setReactSkill(count > 90 ? 90 : count);
      setPhp(count > 85 ? 85 : count);
      setUx(count > 92 ? 92 : count);

      if (count > 100) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Skill Cards
  const skillsInfo = [
    {
      title: "Web Development",
      description:
        "HTML, CSS, JavaScript, React, PHP, Databases, RESTful APIs",
      icon: "💻",
    },
    {
      title: "UX / UI Design",
      description: "Figma, Adobe XD, Prototyping, User Experience",
      icon: "🎨",
    },
    {
      title: "DevOps / Tools",
      description: "Docker, AWS, GitHub, CI/CD, Deployment",
      icon: "⚙️",
    },
    {
      title: "Professional Skills",
      description:
        "Time Management, Problem Solving, Teamwork, Leadership, Communication, Adaptability",
      icon: "📈",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section">My Skills & Experience</h2>
      <p className="section">
        A blend of technical, soft, and professional skills that drive results.
        I strive for clean code, great UX, and professional collaboration.
      </p>

      {/* Skill Cards */}
      <div className="skills">
        {skillsInfo.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Skill Bars */}
      <div className="skill">
        <div className="skill-bar">
          <span>HTML / CSS</span>
          <div className="bar">
            <div className="progres" style={{ width: `${html}%` }}></div>
          </div>
          <small>{html}%</small>
        </div>

        <div className="skill-bar">
          <span>React / JavaScript</span>
          <div className="bar">
            <div className="progres" style={{ width: `${reactSkill}%` }}></div>
          </div>
          <small>{reactSkill}%</small>
        </div>

        <div className="skill-bar">
          <span>PHP / Databases</span>
          <div className="bar">
            <div className="progres" style={{ width: `${php}%` }}></div>
          </div>
          <small>{php}%</small>
        </div>

        <div className="skill-bar">
          <span>UX / UI Design</span>
          <div className="bar">
            <div className="progres" style={{ width: `${ux}%` }}></div>
          </div>
          <small>{ux}%</small>
        </div>
      </div>

      {/* Extra Professional Information */}
     <div className="project-info">
  <h3>Additional Experience & Skills</h3>
  <div className="info-cards">
    <div className="info-card">
      <span className="info-icon">🗂️</span>
      <p>Version Control with Git & GitHub</p>
    </div>
    <div className="info-card">
      <span className="info-icon">📝</span>
      <p>Project Management and Time Planning</p>
    </div>
    <div className="info-card">
      <span className="info-icon">💡</span>
      <p>Problem Solving & Critical Thinking</p>
    </div>
    <div className="info-card">
      <span className="info-icon">🤝</span>
      <p>Team Collaboration & Agile Practices</p>
    </div>
    <div className="info-card">
      <span className="info-icon">🎨</span>
      <p>UI/UX Design Prototyping with Figma</p>
    </div>
    <div className="info-card">
      <span className="info-icon">☁️</span>
      <p>Cloud & Deployment: Docker, AWS</p>
    </div>
    <div className="info-card">
      <span className="info-icon">🏆</span>
      <p>Professional Work Ethic & Communication</p>
    </div>
  </div>
</div>

    </section>
  );
}

export default Projects;
