import secureVault from "../assets/projects/SECUREPASS.webp";
import funChat from "../assets/projects/FUNCHAT.webp";
import cwf from "../assets/projects/CWF.webp";
import snippets from "../assets/projects/SNIPPETSTORE.webp";
import coderHub from "../assets/projects/CODERHUB.webp";
import webHub from "../assets/projects/WEBHUB.webp";
import portfolio from "../assets/projects/PORTFOLIO.webp";
import guardianHub from "../assets/projects/GUARDIANHUB.webp";
import shortJob from "../assets/projects/SHORTJOB.webp";
import apexGrid from "../assets/projects/APEXGRID.webp";
import navshraKathakala from "../assets/projects/NAVSHRA.webp";

// Selected repositories and live previews reviewed September 10, 2026.
const projectEntries = [
  {
    name: "Guardian Hub",
    image: guardianHub,
    imageFit: "contain",
    imageAlt:
      "Guardian Hub dashboard showing family devices, screen-time insights, and safety status",
    category: "Family safety",
    tech: ["React", "TypeScript", "Socket.io", "Recharts"],
    description:
      "A family safety dashboard for connected devices, screen-time insights, and transparent permissions. Device enrollment, safety settings, and activity logs bring family technology into one clear interface.",
    github: "https://github.com/Ajay120503/guardian-hub",
    updatedAt: "2026-09-02T18:34:52Z",
    live: "https://guardian-hub-eight.vercel.app/",
  },
  {
    name: "ShortJob",
    image: shortJob,
    imageAlt:
      "ShortJob homepage with short-term opportunities and community features",
    category: "Real-time",
    tech: ["React", "Socket.io", "Zustand", "PWA"],
    description:
      "A professional community connecting people with short-term opportunities. Combines nearby job discovery, applicant tracking, social posts, and real-time messaging in a responsive web app.",
    github: "https://github.com/Ajay120503/short-job-3",
    updatedAt: "2026-09-10T04:48:43Z",
    live: "https://short-job-3.vercel.app/",
  },
  {
    name: "ApexGrid",
    image: apexGrid,
    imageAlt:
      "ApexGrid digital marketing homepage and connected strategy illustration",
    category: "Agency website",
    tech: ["React", "Vite", "Tailwind CSS", "Static rendering"],
    description:
      "A digital marketing website with dedicated service pages, a filterable creative portfolio, and a cohesive visual identity. Statically rendered pages keep the experience fast and content accessible.",
    github: "https://github.com/Ajay120503/apexgrid",
    updatedAt: "2026-09-10T04:36:05Z",
    live: "https://apexgrid-beta.vercel.app/",
  },
  {
    name: "Navshra Kathakala",
    image: navshraKathakala,
    imageAlt: "Navshra Kathakala handmade gifts storefront",
    category: "E-commerce",
    tech: ["React", "Redux Toolkit", "Framer Motion", "Tailwind CSS"],
    description:
      "A handmade-gifts storefront with product discovery, wishlists, shopping cart, and custom-order flows. Customer account pages and an admin interface support products, orders, reviews, and store settings.",
    github: "https://github.com/Ajay120503/navshra-kathakala",
    updatedAt: "2026-06-17T10:24:37Z",
    live: "https://navshra-kathakala.vercel.app/",
  },
  {
    name: "SecureVault",
    image: secureVault,
    imageAlt: "SecureVault application screenshot",
    category: "Full-stack",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    description:
      "A data storage application for managing passwords and personal information, with authenticated access and a responsive interface.",
    github: "https://github.com/Ajay120503/SecureVault",
    updatedAt: "2026-02-20T11:16:20Z",
    live: "https://secure-vault-pearl.vercel.app",
  },
  {
    name: "Fun Chat",
    image: funChat,
    imageAlt: "Fun Chat application screenshot",
    category: "Real-time",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    description:
      "A MERN chat application with real-time conversations, authentication, and protected routes.",
    github: "https://github.com/Ajay120503/fun-chat",
    updatedAt: "2025-05-22T15:28:24Z",
    live: "https://fun-chat-y2tn.onrender.com/",
  },
  {
    name: "CWF",
    image: cwf,
    imageAlt: "CWF application screenshot",
    category: "Real-time",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    description:
      "A real-time messaging application with authenticated accounts, protected conversations, and active-user tracking.",
    github: "https://github.com/Ajay120503/chat-app",
    updatedAt: "2026-03-21T14:32:45Z",
    live: "https://chat-app-q8ci.onrender.com/",
  },
  {
    name: "Snippets Store",
    image: snippets,
    imageAlt: "Snippets Store application screenshot",
    category: "Full-stack",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    description:
      "A developer workspace for creating, organizing, and sharing reusable code snippets with authenticated access.",
    github: "https://github.com/Ajay120503/snippet-store",
    updatedAt: "2026-02-23T17:20:01Z",
    live: "https://snippets-store.vercel.app",
  },
  {
    name: "Coder HUB",
    image: coderHub,
    imageAlt: "Coder HUB application screenshot",
    category: "Real-time",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    description:
      "A collaborative coding workspace with real-time editing and protected routes for team collaboration.",
    github: "https://github.com/Ajay120503/coder-team-source-code",
    updatedAt: "2024-08-23T19:00:55Z",
    live: "https://coder-hub-beta.vercel.app",
  },
  {
    name: "Web HUB",
    image: webHub,
    imageAlt: "Web HUB application screenshot",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A browser-based code editor for writing and previewing web projects.",
    github: "https://github.com/Ajay120503/web-hub-source-code",
    updatedAt: "2024-10-30T11:49:09Z",
    live: "https://web-hub-alpha.vercel.app",
  },
  {
    name: "Portfolio",
    image: portfolio,
    imageAlt: "Portfolio application screenshot",
    category: "Full-stack",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "An earlier personal portfolio showcasing full-stack projects and web development work.",
    github: "https://github.com/Ajay120503/portfolio_client",
    updatedAt: "2026-06-03T03:54:28Z",
    live: "https://portfolio-client-pearl-sigma.vercel.app",
  },
];

// Latest GitHub push first; full UTC timestamps also resolve same-day updates.
export const projects = [...projectEntries].sort(
  (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
);
