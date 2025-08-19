import { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { bounceInUp } from "../Animations/sectionVariants";
import AnimatedSection from "../Animations/AnimatedSection";
import { motion } from "framer-motion";

function Contact() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateForm = () => {
        if (!formData.user_name.trim()) {
            toast.error("Please enter your name");
            return false;
        }
        if (!formData.user_email.trim()) {
            toast.error("Please enter your email");
            return false;
        }
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.user_email)) {
            toast.error("Please enter a valid email address");
            return false;
        }
        if (!formData.message.trim()) {
            toast.error("Message cannot be empty");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        emailjs
            .send(
                "service_tslitio",
                "template_sf4lqi6",
                formData,
                "juI-kUY0pvSq6XNDx"
            )
            .then(
                () => {
                    toast.success("Message sent successfully! 🎉");
                    setFormData({
                        user_name: "",
                        user_email: "",
                        user_phone: "",
                        message: "",
                    });
                },
                () => {
                    toast.error("Failed to send message. Please try again.");
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <section
            id="contact"
            className="flex items-center justify-center text-base-content relative overflow-hidden"
        >
            <AnimatedSection variants={bounceInUp}>
                <div className="w-full max-w-xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-center mb-10 lg:mb-24">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-center mb-12 text-base-content/70">
                        Have a question or want to work together? Drop me a message below 👇
                    </p>

                    {/* Glassmorphic Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card relative bg-base-300/80 backdrop-blur-lg shadow-2xl border border-primary/20 hover:border-primary/50 transition-all p-8 rounded-2xl"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>

                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            {/* Name */}
                            <motion.label
                                whileFocus={{ scale: 1.02 }}
                                className="input w-full input-bordered flex items-center gap-2 bg-base-100 text-base-content focus-within:ring-2 focus-within:ring-primary transition"
                            >
                                <FaUser className="text-primary" />
                                <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className="grow bg-transparent focus:outline-none"
                                    placeholder="Your Name"
                                />
                            </motion.label>

                            {/* Email */}
                            <label className="input w-full input-bordered flex items-center gap-2 bg-base-100 text-base-content focus-within:ring-2 focus-within:ring-primary transition">
                                <FaEnvelope className="text-primary" />
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className="grow bg-transparent focus:outline-none"
                                    placeholder="Your Email"
                                />
                            </label>

                            {/* Phone */}
                            <label className="input w-full input-bordered flex items-center gap-2 bg-base-100 text-base-content focus-within:ring-2 focus-within:ring-primary transition">
                                <FaPhone className="text-primary" />
                                <input
                                    type="tel"
                                    name="user_phone"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                    className="grow bg-transparent focus:outline-none"
                                    placeholder="Your Phone (optional)"
                                />
                            </label>

                            {/* Message */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea textarea-bordered bg-base-100 text-base-content w-full h-36 resize-none focus:ring-2 focus:ring-primary transition"
                                placeholder="Your Message"
                            ></textarea>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default Contact;
