

import { useEffect, useState } from "react";
import "../css/Services.css";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">My Services</h2>
      <p className="section-subtitle">
        What I can help you build with modern web technologies
      </p>

      <div className="services-grid">
        <div
          className={`service-card ${activeCard === 1 ? "active" : ""}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <span className="icons">💻</span>
          <h3>Frontend Development</h3>
          <p>
            Modern, responsive UI using React, HTML, CSS, and JavaScript.
          </p>
        </div>

        <div
          className={`service-card ${activeCard === 2 ? "active" : ""}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <span className="icons">🎨</span>
          <h3>Backend Development</h3>
          <p>
            Building robust APIs and server-side logic with Node.js, WordPress, databases, and MongoDB.
          </p>
        </div>
    

        <div
          className={`service-card ${activeCard === 3 ? "active" : ""}`}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <span className="icons">⚙️</span>
          <h3>Web Applications</h3>
          <p>
            Interactive and dynamic web apps with clean architecture.
          </p>
        </div>

        <div
          className={`service-card ${activeCard === 4 ? "active" : ""}`}
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <span className="icons">🚀</span>
          <h3>Performance & UX</h3>
          <p>
            Fast loading, smooth animations, and great user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
