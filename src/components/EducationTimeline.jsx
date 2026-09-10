import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
const education = [
  [
    "2026 · Current",
    "M.Sc. CA",
    "Fergusson College",
    "CGPA 8.44",
    "First year completed · Studies ongoing",
  ],
  [
    "2022 — 2025",
    "B.Sc. Computer Science",
    "Marathwada Mitramandal College of Commerce (MMCC)",
    "CGPA 8.77",
  ],
  [
    "2020 — 2021",
    "Higher Secondary Education",
    "Pirangut English Medium High School",
    "HSC · 55%",
  ],
  [
    "2018 — 2019",
    "Secondary School Certificate",
    "Appasaheb Dhamale Vidyalay Khechare",
    "SSC · 67.80%",
  ],
];
export default function EducationTimeline() {
  return (
    <section id="education" className="section container education-section">
      <Reveal className="section-label">
        <span>04 / THE FOUNDATION</span>
        <span>MY LEARNING JOURNEY</span>
      </Reveal>
      <div className="education-grid">
        <Reveal>
          <GraduationCap className="accent" size={30} />
          <h2>
            Built on
            <br />
            <span className="serif accent">curiosity.</span>
          </h2>
          <p>
            A foundation in computer science.
            <br />A commitment to keep learning.
          </p>
        </Reveal>
        <div>
          {education.map(([year, title, school, result, progress]) => (
            <Reveal key={year} className="education-row">
              <time>{year}</time>
              <h3>{title}</h3>
              <p>{school}</p>
              {progress && <p>{progress}</p>}
              <span className="education-result">{result}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
