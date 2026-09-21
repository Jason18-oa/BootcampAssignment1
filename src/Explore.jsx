import { Link } from "react-router-dom";

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
      "This project explores a science-and-engineering interface for robotics.",
    tags: ["JavaScript", "Engineering", "UX"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/Jason18-oa",
    demo: "#contact",
  },
];

function Explore({ theme, toggleTheme }) {
  return (
    <main>
      <nav className="navbar">
        <Link
          to="/"
          className="initial-badge"
          title="Back to homepage"
          aria-label="Back to homepage"
        >
          SEA
        </Link>

        <button className="theme-button" onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light" : "◐ Dark"}
        </button>

        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <section className="projects-section">
        <p className="section-label">PROJECTS — ENGINEERING & DEVELOPMENT</p>
        <h2>Projects from the lab.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <p className="project-number">{project.number}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.details}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Explore;