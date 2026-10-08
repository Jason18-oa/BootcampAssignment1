import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./pages/about";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import PageLayout from "./components/PageLayout";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/about"
          element={
            <PageLayout theme={theme} toggleTheme={toggleTheme}>
              <About />
            </PageLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <PageLayout theme={theme} toggleTheme={toggleTheme}>
              <Skills />
            </PageLayout>
          }
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
