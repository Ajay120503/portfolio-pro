import { ArrowUpRight, Code2, Fingerprint, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./react-bits/SpotlightCard";
export default function About() {
  return (
    <section id="about" className="section container">
      <Reveal className="section-label">
        <span>01 / ABOUT ME</span>
        <span>A LITTLE CONTEXT</span>
      </Reveal>
      <div className="about-grid">
        <Reveal>
          <h2>
            A curious mind.
            <br />A builder’s <span className="serif accent">instinct.</span>
          </h2>
          <div className="about-signature">
            Ajay Kandhare <ArrowUpRight size={26} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="large-copy">
            I’m a web developer who cares just as much about how a product feels
            as how it works.
          </p>
          <p>
            My focus is full-stack development with React, Node.js, and
            PostgreSQL. I enjoy turning challenging problems into simple, useful
            experiences — connecting thoughtful interfaces with reliable systems
            behind the scenes.
          </p>
          <p>
            With an interest in cybersecurity and performance, I build with
            security, responsiveness, and maintainability in mind from the very
            first line of code.
          </p>
        </Reveal>
      </div>
      <div className="principles">
        {[
          [
            Code2,
            "Clean by design",
            "Readable code. Thoughtful architecture. Room to grow.",
          ],
          [
            Fingerprint,
            "Secure at the core",
            "Authentication and privacy built into the experience.",
          ],
          [
            Zap,
            "Fast feels better",
            "Responsive interfaces that respect your time.",
          ],
        ].map(([Icon, title, description], i) => (
          <Reveal key={title} delay={i * 0.07}>
            <SpotlightCard
              spotlightColor="rgba(240, 139, 82, 0.12)"
              className="principle"
            >
              <Icon size={23} />
              <h3>{title}</h3>
              <p>{description}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
