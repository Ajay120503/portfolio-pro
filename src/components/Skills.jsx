import { Braces, Database, PanelsTopLeft, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./react-bits/SpotlightCard";
const groups = [
  [
    PanelsTopLeft,
    "01",
    "Frontend",
    "Interfaces that feel effortless.",
    [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "Tailwind CSS",
      "React Native",
    ],
  ],
  [
    Braces,
    "02",
    "Backend",
    "Solid foundations. Reliable systems.",
    ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io", "JWT"],
  ],
  [
    Database,
    "03",
    "Data & security",
    "Organized data. Protected by design.",
    ["PostgreSQL", "MongoDB", "MySQL", "Authentication", "Authorization"],
  ],
  [
    Wrench,
    "04",
    "Tools & workflow",
    "From the first commit to deployment.",
    ["Git & GitHub", "Vite", "Vercel", "Netlify", "Docker", "AWS"],
  ],
];
export default function Skills() {
  return (
    <section id="skills" className="section container">
      <Reveal className="section-label">
        <span>03 / MY TOOLKIT</span>
        <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
      </Reveal>
      <Reveal className="section-heading">
        <h2>
          The right tools.
          <br />
          The <span className="serif accent">right mindset.</span>
        </h2>
        <p>
          A versatile stack to take an idea
          <br />
          from a blank canvas to a working product.
        </p>
      </Reveal>
      <div className="skills-grid">
        {groups.map(([Icon, number, title, subtitle, tags], i) => (
          <Reveal key={title} delay={i * 0.06}>
            <SpotlightCard
              className="skill-card"
              spotlightColor="rgba(240,139,82,0.1)"
            >
              <div className="skill-top">
                <Icon size={25} />
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
