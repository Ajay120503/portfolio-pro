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
        description:
            "A collaborative MERN web application for real-time code editing and user collaboration via protected routes.",
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
    "from-primary/70 to-primary",
    "from-secondary/70 to-secondary",
    "from-accent/70 to-accent",
    "from-info/70 to-info",
    "from-success/70 to-success",
    "from-warning/70 to-warning",
    "from-error/70 to-error",
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project, index) => (
                        <AnimatedSection
                            key={index}
                            variants={bounceStaggeredItem}
                            custom={index}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative rounded-2xl bg-base-200/60 border border-base-content/10 shadow-xl overflow-hidden group backdrop-blur-lg hover:shadow-2xl hover:border-primary/40"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                    <h2 className="text-lg font-bold text-white p-4">
                                        {project.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4">
                                <p className="text-sm text-base-content/80 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack badges */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.split(",").map((stack, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${badgeColors[i % badgeColors.length]} shadow-sm`}
                                        >
                                            {stack.trim()}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-4 pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm btn-outline btn-primary hover:scale-105 transition-transform"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm btn-primary hover:scale-105 shadow-md"
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
