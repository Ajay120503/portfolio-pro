import {
  MotionConfig,
  motion as Motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import EducationTimeline from "./components/EducationTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30 });
  const reduced = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Motion.div
        className="scroll-progress"
        style={{ scaleX: reduced ? scrollYProgress : progress }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <EducationTimeline />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
