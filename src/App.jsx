import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Explore from "./Explore";
import "./index.css";

const PROFILE = {
  name: "Sekyi Emmanuel Asante",
  email: "asantemanuel19@gmail.com",
  github: "https://github.com/Jason18-oa",
  linkedin: "https://www.linkedin.com/in/emmanuel-sekyi-6b9976411",
  whatsapp: "https://wa.me/233530146814",
};


function HomePage({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  useEffect(() => {
  function handleScroll() {
    setShowTopButton(window.scrollY > 450);
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  useEffect(() => {
  const sections = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  useEffect(() => {
  const sections = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


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
          aria-expanded={menuOpen}
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
          
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <a href="#home" className="logo">
          <span>⌁</span> Portfolio Of Sekyi Emmanuel Asante
        </a>
        # I am a Purple Innovator 💜
        <p className="signal-text">● AVAILABLE FOR NEW PROJECTS</p>

        <h1>
          Designing the <span>future</span> through code.
        </h1>

        <p className="hero-description">
          I am a creative developer building useful digital experiences where
          technology, science, and human ideas meet.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="primary-button">
            Explore my work ↗
          </Link>

          <a href="/Emmanuel-Sekyi-CV.pdf" download className="secondary-button">
            Download CV ↓
          </a>
        </div>

        <div className="social-links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </a>
        
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
            LinkedIn
          </a>
        
          <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </section>

      <section className="about-section reveal" id="about">
        <p className="section-label">01 — ABOUT ME</p>

        <div className="about-content">
          <h2>
            Engineering ideas into <span>meaningful experiences.</span>
          </h2>

          <div>
            <p>
              I enjoy turning difficult problems into clean, interactive
              websites. My current focus is Electrical and Electronics Engineering, React, modern web development, and
              responsive user interfaces.
            </p>
            <p>
              I am continuously building projects, learning new tools, and
              improving my skills as a developer.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section reveal" id="skills">
        <p className="section-label">02 — SKILLS & TOOLS</p>
        <h2>My development toolkit.</h2>

        <div className="skills-grid">
         <article>
           <span>01</span>
           <h3>Frontend</h3>
           <p>HTML, CSS, JavaScript, React</p>
           <div className="skill-level">
             <span style={{ width: "85%" }}></span>
           </div>
         </article>
        
         <article>
           <span>02</span>
           <h3>Tools</h3>
           <p>Git, GitHub, VS Code, Vite, Figma</p>
           <div className="skill-level">
             <span style={{ width: "75%" }}></span>
           </div>
         </article>
        
         <article>
           <span>03</span>
           <h3>Currently Learning</h3>
           <p>APIs, Node.js, UI Design, Deployment</p>
           <div className="skill-level">
             <span style={{ width: "60%" }}></span>
           </div>
         </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">03 — CONTACT</p>
        <h2>Have an idea worth building?
          
        </h2>
        

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

      {showTopButton && (
  <button
    className="back-to-top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Back to top"
  >
    ↑
  </button>
)}

      <footer>
        <p>© 2026 Portfolio Of Sekyi Emmanuel Asante. Built with React.</p>

        <div className="footer-socials">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </a>
        
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
            LinkedIn
          </a>
        
          <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
        />

        <Route
          path="/projects"
          element={<Explore theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;