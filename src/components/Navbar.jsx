import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Work"],
  ["skills", "Expertise"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell container">
        <a
          className="wordmark"
          href="#home"
          aria-label="Ajay Kandhare home"
          onClick={() => setOpen(false)}
        >
          ajay<span>.</span>
        </a>
        <nav
          id="primary-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
