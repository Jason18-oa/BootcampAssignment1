import PageLayout from "../components/PageLayout";
import BackToTop from "../components/BackToTop";
import ContactSection from "../components/ContactSection";
import HomeHero from "../components/HomeHero";

const PROFILE = {
  email: "asantemanuel19@gmail.com",
  github: "https://github.com/Jason18-oa",
  linkedin: "https://www.linkedin.com/in/emmanuel-sekyi-6b9976411",
  whatsapp: "https://wa.me/233530146814",
};

export default function Home({ theme, toggleTheme }) {
  return (
    <PageLayout
      theme={theme}
      toggleTheme={toggleTheme}
      footerText="© 2026 S.Emmanuel Asante. Built with determination."
    >
      <HomeHero profile={PROFILE} />
      <ContactSection email={PROFILE.email} />
      <BackToTop />
    </PageLayout>
  );
}
