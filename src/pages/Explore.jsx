import SiteNav from "../components/SiteNav";
import smartEnergyMonitorImage from "../assets/images/smart-energy-monitor.png";
import roboticsControlLabImage from "../assets/images/robotics-control-lab.png";
import cppBackendImage from "../assets/images/tech-skills/cpp-backend.png";
import rockPaperScissorsImage from "../assets/images/tech-skills/rock-paper-scissors.png";
import quizGameImage from "../assets/images/tech-skills/quiz-game.png";
import drinkMenuImage from "../assets/images/tech-skills/drink-menu.png";
import ticTacToeImage from "../assets/images/tech-skills/tic-tac-toe.png";
import aiUnderstandingImage from "../assets/images/tech-skills/ai-understanding.png";

const projects = [
  {
    number: "01",
    title: "Smart Energy Monitor",
    description:
      "A dashboard concept for tracking power consumption and reducing energy waste.",
    details:
      "This project demonstrates how a simple dashboard can make energy data easier to understand. It focuses on clear interface design, responsive layouts, and useful information.",
    tags: ["React", "Data UI", "IoT"],
    image: smartEnergyMonitorImage,
    github: "https://github.com/Jason18-oa",
  },
  {
    number: "02",
    title: "Robotics Control Lab",
    description:
      "An interface concept for monitoring a robotic system and its live activity.",
    details:
      "This project explores a science-and-engineering interface for robotics.",
    tags: ["JavaScript", "Engineering", "UX"],
    image: roboticsControlLabImage,
    github: "https://github.com/Jason18-oa",
  },
];

const techSkillProjects = [
  {
    number: "01",
    title: "C++ Backend Development",
    note: "Build programming confidence with C++ fundamentals and logic-driven applications.",
    image: cppBackendImage,
    github: "https://github.com/Jason18-oa/C--",
  },
  {
    number: "02",
    title: "Rock Paper Scissors",
    note: "A compact C++ game for practicing decisions, comparisons, and interactive play.",
    image: rockPaperScissorsImage,
    github: "https://github.com/Jason18-oa/C--/blob/PROJECTS/r-p-s.cpp",
  },
  {
    number: "03",
    title: "Quiz Game",
    note: "An interactive C++ quiz that puts question flow and answer handling into practice.",
    image: quizGameImage,
    github: "https://github.com/Jason18-oa/C--/blob/PROJECTS/Quizgame.cpp",
  },
  {
    number: "04",
    title: "Drink Menu",
    note: "A simple C++ menu and ordering exercise focused on clear options and input.",
    image: drinkMenuImage,
    github: "https://github.com/Jason18-oa/C--/blob/PROJECTS/drinkmenu.cpp",
  },
  {
    number: "05",
    title: "Tic-Tac-Toe",
    note: "A familiar two-player game for practicing board logic and win conditions in C++.",
    image: ticTacToeImage,
    github: "https://github.com/Jason18-oa/C--/blob/PROJECTS/tictactoe.cpp",
  },
  {
    number: "06",
    title: "Understanding AI",
    note: "Explore foundational ideas in artificial intelligence and its everyday applications.",
    image: aiUnderstandingImage,
    github: "",
  },
];

function Explore({ theme, toggleTheme }) {
  return (
    <main>
      <SiteNav theme={theme} toggleTheme={toggleTheme} />

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

      <section className="tech-projects-section" aria-labelledby="tech-projects-heading">
        <p className="section-label">PROJECTS — TECH SKILLS</p>
        <h2 id="tech-projects-heading">Tech Skills</h2>

        <div className="tech-projects-grid">
          {techSkillProjects.map((project) => (
            <article className="tech-project-card" key={project.number}>
              <img src={project.image} alt={`${project.title} project`} />
              <div className="tech-project-content">
                <p className="tech-project-number">{project.number}</p>
                <h3>{project.title}</h3>
                <p>{project.note}</p>
                {project.github ? (
                  <a
                    className="tech-project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code ↗
                  </a>
                ) : (
                  <span className="tech-project-link is-unconfigured" aria-disabled="true">
                    View code ↗
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Explore;

