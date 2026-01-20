import { useState } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success or error

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Here you can integrate with EmailJS or your backend
    // For demo, we just simulate sending
    setTimeout(() => {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section">Get in Touch</h2>
      <p className="section">
        Feel free to reach out to me for projects, collaborations, or questions.
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card" onClick={() => copyToClipboard("ream@example.com")}>
            <FaEnvelope className="info-icon" />
            <h4>Email</h4>
            <p>ream@example.com</p>
          </div>
          <div className="info-card" onClick={() => copyToClipboard("+855 123 456 789")}>
            <FaPhone className="info-icon" />
            <h4>Phone</h4>
            <p>+855 123 456 789</p>
          </div>
          <div className="info-card">
            <FaLinkedin className="info-icon" />
            <h4>LinkedIn</h4>
            <p>
              <a href="https://linkedin.com/in/ream" target="_blank" rel="noreferrer">
                linkedin.com/in/ream
              </a>
            </p>
          </div>
          <div className="info-card">
            <FaGithub className="info-icon" />
            <h4>GitHub</h4>
            <p>
              <a href="https://github.com/ream" target="_blank" rel="noreferrer">
                github.com/ream
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send me a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn primary">
            ✉️ Send Message
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
