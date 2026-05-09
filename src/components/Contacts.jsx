import { useState } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "reamkhorn12345@gmail.com",
      href: "mailto:reamkhorn12345@gmail.com",
      copy: "reamkhorn12345@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+855 863 393 350",
      href: "tel:+855863393350",
      copy: "+855 863 393 350",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/ream",
      href: "https://linkedin.com/in/ream",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Ream111222333",
      href: "https://github.com/Ream111222333",
    },
  ];

  return (
    <section className="contact" id="contact">
      {/* CTA Hero */}
      <div className="contact-cta">
        <h2>Ready to start your project?</h2>
        <p>Let's discuss how I can help bring your ideas to life</p>
        <a href="#contact-form" className="cta-button">
          <FaPaperPlane /> Get In Touch
        </a>
      </div>

      <div className="contact-container" id="contact-form">
        {/* Contact Cards */}
        <div className="contact-info">
          <h3 className="contact-subtitle">Contact Info</h3>
          <div className="info-grid">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="info-card"
                onClick={(e) => {
                  if (c.copy) {
                    e.preventDefault();
                    copyToClipboard(c.copy);
                  }
                }}
              >
                <div className="info-icon">{c.icon}</div>
                <div className="info-details">
                  <span className="info-label">{c.label}</span>
                  <span className="info-value">{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            <FaPaperPlane /> Send Message
          </button>
          {status && (
            <p className={`form-status ${status.includes("success") ? "success" : "error"}`}>
              {status.includes("success") && <FaCheckCircle />} {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
