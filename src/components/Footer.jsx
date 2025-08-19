import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full bg-base-300 text-base-content mt-10">
            {/* Gradient Divider */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                {/* Copyright */}
                <p className="text-sm md:text-base opacity-80 text-center md:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-bold text-primary animate-pulse drop-shadow-lg">
                        Ajay Kandhare
                    </span>
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-end items-center gap-6">
                    {[
                        {
                            href: "https://github.com/Ajay120503",
                            icon: <Github size={22} />,
                        },
                        {
                            href: "https://in.linkedin.com/in/ajay-k-178008239",
                            icon: <Linkedin size={22} />,
                        },
                        {
                            href: "https://instagram.com/ajay.kandhare.12",
                            icon: <Instagram size={22} />,
                        },
                        {
                            href: "mailto:ajaykandhare12@gmail.com",
                            icon: <Mail size={22} />,
                        },
                    ].map(({ href, icon }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-primary-content 
                         transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_var(--p)]"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
