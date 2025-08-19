import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import EducationTimeline from "./components/EducationTimeline.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
import { useEffect } from "react";

function App() {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  return (
    <div className="bg-base-200 text-base-content" >
      {/* Toast Notifications */}
      <Toaster position="top-right" />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="scroll-smooth min-h-screen bg-base-100">
        {/* Hero Section - Fullscreen */}
        <section id="home" className="bg-base-200">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="bg-base-300">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-base-200">

          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-base-100">
          <Skills />

        </section>

        {/* Education Section */}
        <section id="education" className="bg-base-300" >
          <EducationTimeline />
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-base-200" >
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
