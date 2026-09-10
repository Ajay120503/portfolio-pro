import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="container footer">
      <a className="wordmark" href="#home">
        ajay<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Ajay Kandhare. Crafted with intention.</p>
      <a className="back-top" href="#home">
        Back to top <ArrowUp size={16} />
      </a>
    </footer>
  );
}
