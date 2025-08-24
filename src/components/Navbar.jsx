import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBurgerButton from "./AnimatedBurgerButton.jsx";
import ThemeSelector from "./ThemeSelector.jsx";
import { Home, Info, Layout, Code, MessageCircle, Book } from "lucide-react";
import { useScrollSpy } from "../store/useScrollSpy.js";

const navItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "About", id: "about", icon: Info },
    { name: "Projects", id: "projects", icon: Layout },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Education", id: "education", icon: Book },
    { name: "Contact", id: "contact", icon: MessageCircle },
];

const navbarVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Use scroll spy to track active section
    const activeSection = useScrollSpy(
        navItems.map((item) => item.id),
        120 // offset to trigger a bit before section hits top
    );

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -70;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-0 z-50 w-full border-b border-base-content/10
                 backdrop-blur-xl bg-base-200/70 shadow-lg"
        >
            {/* Gradient Glow Strip */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3">
                {/* Logo */}
                <div className="flex-1 max-w-[160px]">
                    <a
                        href="#home"
                        onClick={() => handleScroll("home")}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-11 h-11 flex items-center justify-center rounded-full 
                         bg-gradient-to-tr from-primary to-secondary text-white 
                         font-bold text-lg shadow-lg"
                        >
                            AJ
                        </motion.div>
                    </a>
                </div>

                {/* Desktop Nav */}
                <motion.nav
                    className="hidden lg:flex items-center gap-8"
                    initial="hidden"
                    animate="visible"
                >
                    {navItems.map(({ name, id }, i) => (
                        <motion.div
                            key={name}
                            custom={i}
                            variants={navItemVariants}
                            className="relative"
                        >
                            <button
                                onClick={() => handleScroll(id)}
                                className={`relative text-[17px] font-medium transition-all duration-300
                  ${activeSection === id
                                        ? "text-primary"
                                        : "text-base-content/80 hover:text-primary"
                                    }`}
                            >
                                {name}

                                {/* Animated underline */}
                                {activeSection === id && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary"
                                    />
                                )}
                            </button>
                        </motion.div>
                    ))}
                    <ThemeSelector />
                </motion.nav>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-2">
                    <ThemeSelector />
                    <AnimatedBurgerButton
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden bg-base-200/95 backdrop-blur-md shadow-md py-2"
                    >
                        <ul className="flex flex-col gap-4 p-6">
                            {navItems.map(({ name, id, icon: Icon }, i) => (
                                <motion.li
                                    key={name}
                                    custom={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <button
                                        onClick={() => handleScroll(id)}
                                        className={`flex items-center w-full gap-3 text-lg font-medium transition duration-300
                      ${activeSection === id
                                                ? "text-primary"
                                                : "hover:text-primary/80"
                                            }`}
                                    >
                                        <Icon size={20} />
                                        {name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
