import React from "react";
import { Github, ExternalLink } from "lucide-react";
import project1 from "../assets/projects/FUNCHAT.png";
import project2 from "../assets/projects/CWF.png";
import project3 from "../assets/projects/SNIPPETSTORE.png";
import project4 from "../assets/projects/CODERHUB.png";
import project5 from "../assets/projects/WEBHUB.png";
import {
    bounceInUp,
    bounceStaggeredItem,
    bounceStaggeredContainer,
} from "../Animations/sectionVariants";
import AnimatedSection from "../Animations/AnimatedSection";

const projects = [
    {
        name: "Fun Chat",
        image: project1,
        tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
        description:
            "A modern MERN-based chat platform with real-time WebSockets, authentication and private routes.",
        github: "https://github.com/Ajay120503/fun-chat.git",
        live: "https://chat-app-q8ci.onrender.com",
    },
    {
        name: "CWF",
        image: project2,
        tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
        description:
            "A real-time MERN chat app with secure authentication, protected routes, and active user tracking.",
        github: "https://github.com/Ajay120503/chat-app",
        live: "https://chat-app-q8ci.onrender.com/",
    },
    {
        name: "Snippets Store",
        image: project3,
        tech: "MERN Stack, Vite, Tailwind CSS, DaisyUI, REST API",
        description:
            "A modern web app for developers to create, manage, and share reusable code snippets with an intuitive UI and secure authentication.",
        github: "https://github.com/Ajay120503/snippet-store.git",
        live: "https://snippets-store.vercel.app",
    },
    {
        name: "Coder HUB",
        image: project4,
        tech: "MERN Stack, Tailwind CSS",
        description: "A collaborative MERN web application for real-time code editing and user collaboration via protected routes.",
        github: "https://github.com/Ajay120503/coder-team-source-code.git",
        live: "https://coder-hub-beta.vercel.app",
    },
    {
        name: "Web HUB",
        image: project5,
        tech: "HTML, CSS, JavaScript",
        description: "A web application for real-time code editing.",
        github: "https://github.com/Ajay120503/web-hub-source-code.git",
        live: "https://web-hub-alpha.vercel.app",
    },

];

const badgeColors = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex items-center justify-center text-base-content relative overflow-hidden"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24">
                {/* Heading */}
                <AnimatedSection variants={bounceInUp}>
                    <h1 className="text-4xl font-bold text-center mb-10 lg:mb-24">
                        My <span className="text-primary">Projects</span>
                    </h1>
                </AnimatedSection>

                {/* Project Grid */}
                <AnimatedSection
                    variants={bounceStaggeredContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    {projects.map((project, index) => (
                        <AnimatedSection
                            key={index}
                            variants={bounceStaggeredItem}
                            custom={index}
                            className="card bg-base-300 border border-base-content/20 shadow-lg rounded-2xl overflow-hidden group hover:shadow-xl hover:scale-[1.03] relative"
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {/* Image with overlay */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h2 className="absolute bottom-4 left-4 text-white text-lg font-bold z-20">
                                    {project.name}
                                </h2>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 space-y-4">
                                <p className="text-sm text-base-content/80 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack badges */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.split(",").map((stack, i) => (
                                        <div
                                            key={i}
                                            className={`badge badge-outline badge-${badgeColors[i % badgeColors.length]} text-xs`}
                                        >
                                            {stack.trim()}
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-3 pt-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm btn-outline btn-primary"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm btn-primary"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Projects;
