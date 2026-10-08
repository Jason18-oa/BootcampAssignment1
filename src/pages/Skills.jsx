import electronicsImage from "../assets/electronics-toolkit.svg";
import frontendImage from "../assets/frontend-toolkit.svg";
import toolsImage from "../assets/tools-toolkit.svg";
import communicationSkillsImage from "../assets/images/soft-skills/communication-skills.png";
import intrapersonalSkillsImage from "../assets/images/soft-skills/intrapersonal-skills.svg";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <p className="section-label">02 — SKILLS &amp; TOOLS</p>
      <h2>My development toolkit.</h2>

      <div className="skills-grid">
        <article>
          <span>01</span>
          <img
            className="skill-card-image"
            src={electronicsImage}
            alt="Circuit board with electronic components and signal traces"
          />
          <h3>Engineering Studies</h3>
          <p>
            Electrical and Electronics Engineering foundations; CAD design
            (proficient)
          </p>
          <p className="skill-status">Academic focus</p>
        </article>

        <article>
          <span>02</span>
          <img
            className="skill-card-image"
            src={frontendImage}
            alt="Code brackets inside a browser window"
          />
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JavaScript, React</p>
          <p className="skill-status">Web development toolkit</p>
        </article>

        <article>
          <span>03</span>
          <img
            className="skill-card-image"
            src={toolsImage}
            alt="Developer toolbox with code and settings symbols"
          />
          <h3>Tools &amp; Ongoing Learning</h3>
          <p>Netlify, Git, GitHub, VS Code, Vite, Figma</p>
          <p className="skill-status">
            Currently learning: APIs, Node.js, UI design, deployment
          </p>
        </article>
      </div>

      <div className="soft-skills-group">
        <p className="section-label">PEOPLE &amp; PERSONAL GROWTH</p>
        <h3>Soft Skills</h3>
        <div className="soft-skills-grid">
          <article className="soft-skill-card">
            <span>01</span>
            <img
              className="soft-skill-image"
              src={communicationSkillsImage}
              alt="People sharing ideas and listening to one another"
            />
            <h4>Communication Skills</h4>
            <p>
              Share ideas clearly, listen actively, and collaborate respectfully
              with others.
            </p>
          </article>

          <article className="soft-skill-card">
            <span>02</span>
            <img
              className="soft-skill-image"
              src={intrapersonalSkillsImage}
              alt="Illustration representing self-awareness and personal reflection"
            />
            <h4>Intrapersonal Skills</h4>
            <p>
              Build self-awareness, reflect on strengths, and take ownership of
              personal growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
