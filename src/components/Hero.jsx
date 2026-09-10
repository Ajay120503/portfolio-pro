import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin } from "lucide-react";
import BlurText from "./react-bits/BlurText";
import Reveal from "./Reveal";
import portrait from "../assets/ajay.webp";
import resume from "../Documents/RESUME.pdf";
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">
              <span className="status-dot" /> FULL-STACK DEVELOPER
            </div>
          </Reveal>
          <h1>
            <BlurText text="Thoughtful code." delay={110} direction="bottom" />
            <BlurText text="Meaningful" delay={110} direction="bottom" />
            <span className="accent">
              <BlurText text="experiences." delay={110} direction="bottom" />
            </span>
          </h1>
          <Reveal delay={0.15}>
            <p className="hero-intro">
              Hi, I’m <strong>Ajay Kandhare.</strong> I turn complex ideas into
              <br className="desktop-break" /> intuitive, secure, and
              beautifully crafted web applications.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                className="button secondary"
                href={resume}
                download="Ajay-Kandhare-Resume.pdf"
              >
                Download résumé <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-socials">
              <span>FIND ME ON</span>
              <a
                href="https://github.com/Ajay120503"
                target="_blank"
                rel="noreferrer"
                aria-label="Ajay on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://in.linkedin.com/in/ajay-k-178008239"
                target="_blank"
                rel="noreferrer"
                aria-label="Ajay on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="social-divider" />
              <span>LET’S BUILD SOMETHING GOOD.</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-art" delay={0.2}>
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="art-plus plus-one">+</span>
          <span className="art-plus plus-two">+</span>
          <span className="art-coordinate">
            CREATIVE MIND. DEVELOPER AT HEART.
          </span>
          <div className="portrait-halo" />
          <img
            className="hero-portrait"
            src={portrait}
            alt="Illustrated portrait of Ajay Kandhare"
            width="462"
            height="540"
            fetchPriority="high"
          />
          <div className="floating-note note-code">
            <Code2 size={19} />
            <span>
              Built with curiosity
              <span className="note-muted">& a little too much coffee.</span>
            </span>
          </div>
          <div className="floating-note note-stack">
            <span className="status-dot" />
            <span>React · Node.js · PostgreSQL</span>
          </div>
          <span className="art-caption">
            AJAY KANDHARE <span>© {new Date().getFullYear()}</span>
          </span>
        </Reveal>
      </div>
      <Reveal className="hero-bottom">
        <a href="#about">
          <span className="scroll-icon">
            <ArrowDown size={15} />
          </span>{" "}
          SCROLL TO EXPLORE
        </a>
        <span>GOOD DESIGN. CLEAN CODE. REAL IMPACT.</span>
        <span className="tiny-star">✳</span>
      </Reveal>
      <div className="tech-strip" aria-label="Core technologies">
        <span>THE TOOLS BEHIND THE CRAFT</span>
        <div>
          React <i>✳</i> Node.js <i>✳</i> PostgreSQL <i>✳</i> JavaScript{" "}
          <i>✳</i> Tailwind CSS
        </div>
      </div>
    </section>
  );
}
