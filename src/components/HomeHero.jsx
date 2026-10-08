import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function HomeHero({ profile }) {
  return (
    <section className="hero" id="home">
      <a href="#home" className="logo">
        <span></span> Hello, I'm Sekyi Emmanuel
      </a>

      <p className="signal-text">● AVAILABLE FOR NEW PROJECTS</p>
      <p></p>
      <h1>
        Engineering ideas into <span>real-world solutions.</span>
      </h1>
      <p></p>

      <div className="hero-actions">
        <Link to="/projects" className="primary-button">
          Explore my work ↗
        </Link>
        <a
          href="/Emmanuel-Sekyi-CV.pdf"
          download
          className="secondary-button"
        >
          Download CV ↓
        </a>
      </div>
      <div className="connect-menu">
        <button className="primary-button" type="button" aria-haspopup="true">
          Connect with me ↗
        </button>

        <div className="social-links connect-options">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
