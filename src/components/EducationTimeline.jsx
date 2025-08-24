import React from "react";
import AnimatedSection from "../Animations/AnimatedSection";
import { bounceInUp } from "../Animations/sectionVariants";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

// Education data
const education = [
    {
        year: "2022 - 2025",
        title: "Marathwada Mitramandal College of Commerce (MMCC)",
        description: "Bachelor’s in Computer Science (B.Sc. CS), CGPA: 8.77",
        icon: GraduationCap,
    },
    {
        year: "2020 - 2021",
        title: "Pirangut English Medium High School",
        description: "Higher Secondary Education (HSC), 55%",
        icon: BookOpen,
    },
    {
        year: "2018 - 2019",
        title: "Appasaheb Dhamale Vidyalay Khechare",
        description: "Secondary School Certificate (SSC), 67.80%",
        icon: School,
    },
];

function EducationTimeline() {
    return (
        <section
            id="education"
            className="flex items-center justify-center text-base-content relative overflow-hidden"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24">
                {/* Title */}
                <AnimatedSection variants={bounceInUp}>
                    <h1 className="text-4xl font-bold text-center mb-10 lg:mb-24">
                        My{" "}
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                            Education
                        </span>
                    </h1>
                </AnimatedSection>

                {/* Timeline */}
                <AnimatedSection variants={bounceInUp}>
                    <ul className="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical relative">
                        {education.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <li key={index}>
                                    {index !== 0 && (
                                        <hr className="bg-gradient-to-b from-primary to-secondary h-[2px] opacity-60" />
                                    )}

                                    {/* Timeline Icon */}
                                    <div className="timeline-middle">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                                            <item.icon size={18} />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className={`timeline-start mb-12 lg:mb-16 
                                        ${isLeft ? "lg:timeline-start" : "lg:timeline-end"} 
                                        timeline-end`}
                                    >
                                        <div
                                            className={`relative card bg-base-200/60 backdrop-blur-md p-6 shadow-md transition rounded-xl 
                                                        ${isLeft
                                                    ? "lg:border-l-4 lg:border-primary lg:rounded-r-xl"
                                                    : "lg:border-r-4 lg:border-secondary lg:rounded-l-xl"} 
                                                        border-l-4 border-primary lg:border-none`}
                                        >
                                            {/* Connector */}
                                            <span
                                                className={`lg:absolute top-3 w-3 lg:h-[5px] bg-base-200/60 ${isLeft
                                                    ? "lg:left-auto lg:-right-3"
                                                    : "lg:-left-3 lg:right-auto"
                                                    } -left-0 h-0`}
                                            ></span>

                                            <time
                                                className="font-mono italic text-sm text-primary lg:text-primary"
                                            >
                                                {item.year}
                                            </time>
                                            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                                            <p className="text-sm opacity-80 mt-1">{item.description}</p>
                                        </div>
                                    </motion.div>


                                    {index !== education.length - 1 && (
                                        <hr className="bg-gradient-to-b from-secondary to-primary h-[2px] opacity-60" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default EducationTimeline;
