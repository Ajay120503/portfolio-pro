import { motion } from "framer-motion";
import React from "react";

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="4"
        strokeLinecap="round"
        {...props}
    />
);

const AnimatedBurgerButton = ({ menuOpen, setMenuOpen }) => {
    return (
        <button
            className="btn btn-md btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
        >
            <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                initial={false}
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Top Line */}
                <Path
                    variants={{
                        closed: { d: "M 3 6 L 21 6" },
                        open: { d: "M 4 4 L 20 20" },
                    }}
                    stroke="currentColor"
                />
                {/* Middle Line */}
                <Path
                    variants={{
                        closed: { d: "M 6 12 L 18 12", opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    stroke="currentColor"
                />
                {/* Bottom Line */}
                <Path
                    variants={{
                        closed: { d: "M 8 18 L 16 18" },
                        open: { d: "M 4 20 L 20 4" },
                    }}
                    stroke="currentColor"
                />
            </motion.svg>
        </button>
    );
};

export default AnimatedBurgerButton;
