import React from "react";
import AnimatedSection from "../Animations/AnimatedSection.jsx";
import Typingtext from "./Typingtext";
import { bounceIn, fadeInLeft, fadeInRight } from "../Animations/sectionVariants.js";
import AJAY from "../assets/ajay.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-26 lg:pt-24 overflow-hidden"
        >
            {/* Background gradient accents with floating motion */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-slow-bounce"></div>
            <div className="absolute top-20 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-slow-bounce delay-2000"></div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
                {/* Typing Heading */}
                <AnimatedSection variants={bounceIn} className="text-center">
                    <Typingtext
                        as="h1"
                        initialDelay={500}
                        typingSpeed={120}
                        deletingSpeed={90}
                        pauseDuration={1500}
                        loop={true}
                        showCursor={true}
                        cursorCharacter="|"
                        className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug"
                        sentences={[
                            [
                                { text: "Hi, I’m", className: "" },
                                {
                                    text: " Ajay Kandhare",
                                    className:
                                        "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold animate-gradient-x",
                                },
                            ],
                            [
                                { text: "Web Developer", className: "text-secondary font-semibold" },
                                { text: " & ", className: "" },
                                { text: "Cybersecurity", className: "text-warning font-bold" },
                            ],
                            [
                                { text: "I build ", className: "" },
                                { text: "Secure", className: "text-info font-semibold" },
                                { text: ", Scalable, and Responsive Apps", className: "" },
                            ],
                        ]}
                    />
                </AnimatedSection>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 lg:mt-16">
                    {/* Left Column – Intro */}
                    <AnimatedSection variants={fadeInLeft}>
                        <div className="p-6 sm:p-8">
                            <p className="text-lg sm:text-xl md:text-2xl text-base-content/90 mb-6 leading-relaxed">
                                I specialize in{" "}
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                                    React
                                </span>
                                ,{" "}
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                                    Node.js
                                </span>
                                , and{" "}
                                <span className="text-warning font-semibold">Cybersecurity</span>. My goal is to build{" "}
                                <span className="text-info font-semibold">secure</span>,{" "}
                                <span className="text-info font-semibold">scalable</span>, and{" "}
                                <span className="text-info font-semibold">responsive</span> apps that make an impact.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-base-content/80 leading-relaxed">
                                Whether it’s{" "}
                                <span className="font-semibold text-secondary">full-stack development</span> or{" "}
                                <span className="font-semibold text-secondary">modern UI/UX</span>, I’m passionate about delivering{" "}
                                <span className="text-warning font-bold">quality code</span> and{" "}
                                <span className="text-warning font-bold">meaningful experiences</span>.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Right Column – Floating Image */}
                    <AnimatedSection variants={fadeInRight} className="flex justify-center">
                        <div className="relative">
                            {/* Animated gradient border */}
                            <div className="p-[4px] bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x morph-border">
                                <div
                                    className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96
                                    aspect-square rounded-full overflow-hidden relative animate-float"
                                >
                                    <img src={AJAY} alt="Ajay Kandhare" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-10">
                    <AnimatedSection variants={fadeInLeft}>
                        <a href="#projects">
                            <button className="btn btn-primary rounded-full px-8 text-base flex items-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(0,200,255,0.7)] hover:scale-110 transition-all">
                                View My Projects
                            </button>
                        </a>
                    </AnimatedSection>
                    <AnimatedSection variants={fadeInRight}>
                        <a href="#contact">
                            <button className="btn btn-outline btn-primary rounded-full lg:mb-0 mb-5 px-8 text-base flex items-center gap-2 border-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-110 transition-all">
                                Contact Me
                            </button>
                        </a>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Hero;
