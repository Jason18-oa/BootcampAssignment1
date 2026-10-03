import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SiteNav({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="initial-badge" title="Portfolio home" aria-label="Home">
        SEA
      </Link>
      <button className="theme-button" onClick={toggleTheme} type="button">
        {theme === "dark" ? "☀ Light" : "◐ Dark"}
      </button>
      <button
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        type="button"
      >
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {pathname !== "/" && <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>}
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
