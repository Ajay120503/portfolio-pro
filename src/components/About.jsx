import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si";
import { Download } from "lucide-react";
import RESUME from "../Documents/RESUME.pdf";
import AnimatedSection from "../Animations/AnimatedSection";
import { bounceIn } from "../Animations/sectionVariants";

const skills = [
    { icon: <FaReact className="text-sky-500" />, name: "React.js" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
    { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-indigo-700" />, name: "PostgreSQL" },
    { icon: <FaDatabase className="text-gray-600" />, name: "SQL" },
];

// Random border styles for variation
const randomBorders = [
    "rounded-lg",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
    "rounded-t-3xl rounded-br-xl",
    "rounded-b-2xl rounded-tl-xl",
];

function About() {
    return (
        <section
            id="about"
            className="relative flex items-center justify-center bg-base-200/60 backdrop-blur-lg text-base-content overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: About Me */}
                    <AnimatedSection variants={bounceIn}>
                        <div className="p-6 rounded-2xl bg-base-100/60 shadow-lg backdrop-blur-xl border border-base-content/10">
                            <h1 className="text-4xl font-bold mb-6">
                                About <span className="text-primary">Me</span>
                            </h1>
                            <p className="text-lg leading-relaxed text-base-content/80">
                                Hi 👋 I’m{" "}
                                <span className="font-bold">Ajay Kandhare</span>, a Web
                                Developer passionate about building{" "}
                                <span className="text-primary font-semibold">
                                    secure, scalable, and responsive web applications
                                </span>
                                . I specialize in{" "}
                                <span className="text-primary font-semibold">
                                    React.js, Node.js, and PostgreSQL
                                </span>
                                , with strong hands-on experience in{" "}
                                <span className="font-semibold">full-stack development</span>.
                                My interest also extends to{" "}
                                <span className="font-semibold">cybersecurity</span> and{" "}
                                <span className="font-semibold">
                                    performance optimization
                                </span>
                                , ensuring the applications I create are both efficient and
                                reliable.
                            </p>

                            <a
                                href={RESUME}
                                download
                                className="btn btn-primary mt-8 rounded-full px-8 text-base items-center gap-2 shadow-lg hover:shadow-[0_0_20px_var(--p)] transition-all duration-300"
                            >
                                <Download className="h-5 w-5 animate-bounce" /> Download Resume
                            </a>
                        </div>
                    </AnimatedSection>

                    {/* Divider */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

                    {/* Right: Skills */}
                    <AnimatedSection variants={bounceIn}>
                        <motion.div
                            className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-items-center"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.12 },
                                },
                            }}
                        >
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    className={`relative group flex flex-col items-center p-5 bg-base-100 morph-border border border-base-content/10  shadow-md cursor-pointer backdrop-blur-md hover:shadow-[0_0_20px_var(--p)] transition-all ${randomBorders[i % randomBorders.length]}`}
                                    whileHover={{ scale: 1.15, rotate: 3, z: 20 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                >
                                    <div className="text-5xl animate-float-3d">{skill.icon}</div>
                                    <span className="mt-3 text-sm font-medium opacity-80 group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

export default About;
