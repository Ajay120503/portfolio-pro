import React from "react";
import { motion } from "framer-motion";
import {
    Code2, Layout, Smartphone, Database, ServerCog,
    GitBranch, CloudCog, Cpu, ShieldCheck, Globe2,
} from "lucide-react";
import AnimatedSection from "../Animations/AnimatedSection";
import {
    bounceInUp,
    bounceStaggeredItem,
    bounceStaggeredContainer,
} from "../Animations/sectionVariants";

const skills = [
    { icon: Layout, title: "Frontend Development", description: "React, Next.js, Tailwind, DaisyUI for modern responsive UIs." },
    { icon: Code2, title: "JavaScript & TypeScript", description: "Strong foundation in ES6+, TypeScript for scalable applications." },
    { icon: Smartphone, title: "Mobile Development", description: "React Native for cross-platform apps with smooth performance." },
    { icon: Database, title: "Databases", description: "MongoDB, PostgreSQL, MySQL for flexible and scalable storage." },
    { icon: ServerCog, title: "Backend Development", description: "Node.js, Express, REST APIs, GraphQL for efficient server logic." },
    { icon: GitBranch, title: "Version Control", description: "Proficient with Git & GitHub for collaboration and CI/CD pipelines." },
    { icon: CloudCog, title: "Cloud & DevOps", description: "Deployment with Vercel, Netlify, Docker & AWS services." },
    { icon: Cpu, title: "Problem Solving", description: "Strong DSA and algorithmic thinking for optimized solutions." },
    { icon: ShieldCheck, title: "Security Best Practices", description: "Authentication, authorization, and secure coding standards." },
    { icon: Globe2, title: "Web Performance", description: "Optimized SEO, accessibility, and performance tuning." },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex items-center justify-center text-base-content relative overflow-hidden"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24">
                {/* Heading */}
                <AnimatedSection variants={bounceInUp}>
                    <h1 className="text-4xl font-bold text-center mb-10 lg:mb-24">
                        My{" "}
                        <span className="text-primary inline-flex overflow-hidden">
                            Skills
                        </span>
                    </h1>
                </AnimatedSection>

                {/* Skills Grid */}
                <AnimatedSection
                    variants={bounceStaggeredContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {skills.map((skill, index) => (
                        <AnimatedSection
                            key={index}
                            variants={bounceStaggeredItem}
                            custom={index}
                            className="relative group p-6 rounded-2xl bg-base-300 border border-base-content/10 shadow-md hover:shadow-2xl hover:border-primary/40"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {/* Animated Glow Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 blur-xl"></div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon with Hover Glow */}
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-base-100 mb-4 border border-base-content/10 relative">
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        {React.createElement(skill.icon, {
                                            className: "w-9 h-9 text-primary",
                                        })}
                                    </motion.div>
                                    <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition" />
                                </div>

                                {/* Title */}
                                <h2 className="text-lg font-semibold mb-2">{skill.title}</h2>

                                {/* Description */}
                                <p className="text-sm text-base-content/80 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Skills;
