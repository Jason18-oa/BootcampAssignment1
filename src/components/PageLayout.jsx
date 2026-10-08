import SiteNav from "./SiteNav";

export default function PageLayout({
  theme,
  toggleTheme,
  footerText = "© 2026 Portfolio Of Sekyi Emmanuel Asante. Built with determination.",
  children,
}) {
  return (
    <main>
      <SiteNav theme={theme} toggleTheme={toggleTheme} />
      {children}
      <footer>
        <p>{footerText}</p>
      </footer>
    </main>
  );
}
