import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Pune, India",
    href: null,
    color: "blue",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "9579070069",
    href: "tel:+919579070069",
    color: "emerald",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "lakhankale888@gmail.com",
    href: "mailto:lakhankale888@gmail.com",
    color: "amber",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/lakhan-kale",
    href: "https://www.linkedin.com/in/lakhan-kale-29886123b/",
    color: "blue",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Laxmankale",
    href: "https://github.com/Laxmankale",
    color: "emerald",
  },
];

const colorMap = {
  blue: "bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 group-hover:shadow-indigo-200/50",
  emerald: "bg-purple-100/80 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 group-hover:shadow-purple-200/50",
  amber: "bg-pink-100/80 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400 group-hover:shadow-pink-200/50",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:lakhankale888@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper relative">
      <div className="orb orb-blue absolute -right-16 top-32 h-48 w-48" style={{ animationDelay: "1s", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)" }} />
      <div className="orb orb-emerald absolute -left-10 bottom-20 h-40 w-40" style={{ animationDelay: "3s", background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)" }} />

      <p className="section-kicker">Contact</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Let&apos;s discuss an opportunity or project
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Reach out for backend development roles, full-stack project work, or collaboration around
        Java and Spring Boot applications.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="surface-card overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-2 w-full accent-gradient" />
          <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10">
            <h3 className="mb-4 font-outfit text-2xl font-bold text-slate-900 dark:text-white">
              Send a Message
            </h3>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm text-slate-800 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/30"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm text-slate-800 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/30"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about the opportunity or project..."
                className="w-full resize-none rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm text-slate-800 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/30"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl accent-gradient px-6 py-4 text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/40 disabled:opacity-60 active:scale-95"
            >
              {sending ? "Opening mail..." : "Send Message"}
              <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-1">
          {contactItems.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="surface-card group flex items-center gap-5 p-6 transition-all duration-300"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${colorMap[item.color]}`}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="mb-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                      {item.label}
                    </p>
                    <p className="truncate text-base font-bold text-slate-700 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
