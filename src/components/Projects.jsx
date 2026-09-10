import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SpotlightCard from "./react-bits/SpotlightCard";
const filters = [
  "All projects",
  ...new Set(projects.map((project) => project.category)),
];
export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const filtered = projects.filter(
    (p) => filter === "All projects" || p.category === filter,
  );
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <Reveal className="section-label">
          <span>02 / SELECTED WORK</span>
          <span>IDEAS, BROUGHT TO LIFE</span>
        </Reveal>
        <Reveal className="section-heading">
          <h2>
            Less talk.
            <br />
            <span className="serif accent">More building.</span>
          </h2>
          <p>
            Recent builds and earlier explorations.
            <br />
            Ordered by the latest GitHub update, newest first.
          </p>
        </Reveal>
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              aria-pressed={item === filter}
              className={filter === item ? "selected" : ""}
            >
              {item}
              {item === "All projects" && (
                <span>{projects.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {filtered.length} of {projects.length} projects
        </p>
        <div className="project-grid">
          {filtered.map((project) => (
            <Reveal key={project.name}>
              <SpotlightCard
                className="project-card"
                spotlightColor="rgba(240,139,82,0.08)"
              >
                <a
                  className={`project-image project-color-${projects.indexOf(project) % 4}`}
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live website`}
                >
                  <div className="project-image-top">
                    <span>
                      {project.category.toUpperCase()} / WEB APPLICATION
                    </span>
                    <ArrowUpRight size={20} />
                  </div>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    style={{ objectFit: project.imageFit ?? "cover" }}
                    loading="lazy"
                    width="1440"
                    height="900"
                  />
                </a>
                <div className="project-body">
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <span>
                      {String(projects.indexOf(project) + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="project-date">
                    Updated{" "}
                    <time dateTime={project.updatedAt}>
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC",
                      }).format(new Date(project.updatedAt))}
                    </time>
                  </p>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      View project <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} source on GitHub`}
                    >
                      <Github size={16} /> Source code
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
