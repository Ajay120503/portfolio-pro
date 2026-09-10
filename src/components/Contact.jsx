import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
const email = "ajaykandhare12@gmail.com";
export default function Contact() {
  const [state, setState] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!data.user_name.trim() || !data.message.trim()) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_tslitio",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_sf4lqi6",
        data,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "juI-kUY0pvSq6XNDx",
        },
      );
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal className="section-label">
          <span>05 / GET IN TOUCH</span>
          <span>GREAT THINGS START WITH A CONVERSATION</span>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <span className="contact-star" aria-hidden="true">
              ✳
            </span>
            <h2>
              Have something
              <br />
              in <span className="serif accent">mind?</span>
            </h2>
            <p>
              A project, an opportunity, or just a hello.
              <br />
              I’d love to hear what you’re thinking.
            </p>
            <div className="email-link">
              <a href={`mailto:${email}`}>{email}</a>
              <button
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <span className="copy-status" role="status">
              {copied
                ? "Email address copied."
                : copyError
                  ? "Please select the email address to copy it."
                  : ""}
            </span>
            <div className="contact-socials">
              <a
                href="https://github.com/Ajay120503"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={15} />
              </a>
              <a
                href="https://in.linkedin.com/in/ajay-k-178008239"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="user_name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    name="user_email"
                    autoComplete="email"
                    placeholder="alex@example.com"
                    required
                    maxLength={254}
                  />
                </label>
              </div>
              <label>
                Phone <span>(optional)</span>
                <input
                  type="tel"
                  name="user_phone"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  maxLength={30}
                />
              </label>
              <label>
                What are you thinking?
                <textarea
                  name="message"
                  placeholder="Tell me a little about your project or idea…"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                />
              </label>
              <button
                type="submit"
                className="button primary"
                disabled={state === "sending"}
              >
                {state === "sending" ? "Sending message…" : "Send message"}
                <ArrowUpRight size={18} />
              </button>
              <p
                className={`form-status ${state}`}
                role="status"
                aria-live="polite"
              >
                {state === "success"
                  ? "Thanks for reaching out! Your message has been sent."
                  : state === "error"
                    ? "Your message could not be sent. Please try again or email me directly."
                    : state === "invalid"
                      ? "Please enter your name and a message."
                      : "Have a brief? A rough idea is a great place to start."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
