import { useEffect, useState } from "react";
import "./index.css";

const PROFILE = {
  name: "Sekyi Emmanuel Asante",
  email: "asantemanuel19@gmail.com",
  github: "https://github.com/Jason18-oa",
  linkedin: "https://www.linkedin.com/in/emmanuel-sekyi-6b9976411",
  whatsapp: "https://wa.me/233530146814",
};

const projects = [
  {
    number: "01",
    title: "Smart Energy Monitor",
    description:
      "A dashboard concept for tracking power consumption and reducing energy waste.",
    details:
      "This project demonstrates how a simple dashboard can make energy data easier to understand. It focuses on clear interface design, responsive layouts, and useful information.",
    tags: ["React", "Data UI", "IoT"],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/Jason18-oa",
    demo: "#contact",
  },
  {
    number: "02",
    title: "Robotics Control Lab",
    description:
      "An interface concept for monitoring a robotic system and its live activity.",
    details:
      "This project explores a science-and-engineering interface for robotics. It uses high-contrast design and clear visual hierarchy to present technical information.",
    tags: ["JavaScript", "Engineering", "UX"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/Jason18-oa",
    demo: "#contact",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.target.reset();
  }

  return (
    <main>
      <nav className="navbar">
        <div className="initial-badge" title="Portfolio of Sekyi Emmanuel Asante">
          SEA
        </div>
        

        <button className="theme-button" onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light" : "◐ Dark"}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <a href="#home" className="logo">
          <span>⌁</span> Portfolio Of Sekyi Emmanuel Asante
        </a>
        <p className="signal-text">● AVAILABLE FOR NEW PROJECTS</p>

        <h1>
          Designing the <span>future</span> through code.
        </h1>

        <p className="hero-description">
          I am a creative developer building useful digital experiences where
          technology, science, and human ideas meet.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore my work ↗
          </a>

          <a href="/Emmanuel-Sekyi-CV.pdf" download className="secondary-button">
            Download CV ↓
          </a>
        </div>

        <div className="social-links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="section-label">01 — ABOUT ME</p>

        <div className="about-content">
          <h2>
            Engineering ideas into <span>meaningful experiences.</span>
          </h2>

          <div>
            <p>
              I enjoy turning difficult problems into clean, interactive
              websites. My current focus is React, modern web development, and
              responsive user interfaces.
            </p>
            <p>
              I am continuously building projects, learning new tools, and
              improving my skills as a developer.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <p className="section-label">02 — SKILLS & TOOLS</p>
        <h2>My development toolkit.</h2>

        <div className="skills-grid">
          <article>
            <span>01</span>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Responsive Design</p>
          </article>

          <article>
            <span>02</span>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Vite, Figma</p>
          </article>

          <article>
            <span>03</span>
            <h3>Currently Learning</h3>
            <p>APIs, Node.js, UI Design, Deployment</p>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <p className="section-label">03 — SELECTED WORK</p>
        <h2>Projects from the lab.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <p className="project-number">{project.number}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button onClick={() => setSelectedProject(project)}>
                    Project details
                  </button>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    View code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">04 — CONTACT</p>
        <h2>Have an idea worth building?</h2>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Tell me about your idea..."
            rows="5"
            required
          ></textarea>

          <button type="submit" className="primary-button">
            Send message ↗
          </button>

          {sent && (
            <p className="form-note">
              Your email application should now be open. Send the message from
              there.
            </p>
          )}
        </form>
      </section>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <section
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} />
            <p className="project-number">PROJECT {selectedProject.number}</p>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View project code ↗
            </a>
          </section>
        </div>
      )}

      <footer>
        <p>© 2026 Portfolio Of El_Jason. Built with React.</p>

        <div>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;