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
  blue: "bg-lime-200 text-stone-900 dark:bg-lime-300 dark:text-stone-950",
  emerald: "bg-stone-200 text-stone-900 dark:bg-stone-700 dark:text-stone-100",
  amber: "bg-stone-200 text-stone-900 dark:bg-stone-700 dark:text-stone-100",
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
      <div className="orb orb-blue absolute -right-16 top-32 h-48 w-48" style={{ animationDelay: "1s" }} />
      <div className="orb orb-emerald absolute -left-10 bottom-20 h-40 w-40" style={{ animationDelay: "3s" }} />

      <p className="section-kicker">Contact</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Let&apos;s discuss an opportunity or project
      </motion.h2>
      <p className="section-subtitle">
        Reach out for backend development roles, full-stack project work, or collaboration around
        Java and Spring Boot applications.
      </p>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-1.5 w-full accent-gradient" />
          <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
            <h3 className="mb-2 font-outfit text-xl font-semibold text-slate-900 dark:text-white">
              Send a Message
            </h3>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                className="w-full resize-none rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl accent-gradient px-6 py-3.5 text-sm font-semibold text-stone-900 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 disabled:opacity-60"
            >
              {sending ? "Opening mail..." : "Send Message"}
              <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-1">
          {contactItems.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="glass-card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100/30 dark:hover:shadow-blue-950/20"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-300 group-hover:scale-110 ${colorMap[item.color]}`}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">
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
