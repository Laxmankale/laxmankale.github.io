import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Pune, India",
    href: null,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "9579070069",
    href: "tel:+919579070069",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "lakhankale888@gmail.com",
    href: "mailto:lakhankale888@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/lakhan-kale",
    href: "https://www.linkedin.com/in/lakhan-kale-29886123b/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Laxmankale",
    href: "https://github.com/Laxmankale",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      {/* Orb */}
      <div className="orb w-72 h-72 bg-cyan-500 bottom-10 left-1/3" />

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get In <span className="text-gradient">Touch</span>
      </motion.h2>

      <p className="text-center text-slate-500 text-sm -mt-10 mb-14 max-w-md mx-auto">
        Feel free to reach out — I'm always open to exciting opportunities and collaborations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {contactItems.map((item, i) => {
          const Wrapper = item.href ? "a" : "div";
          const wrapperProps = item.href
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Wrapper
                {...wrapperProps}
                className="glass p-5 flex items-center gap-4 group
                  hover:border-cyan-400/30 transition-all duration-300 block"
              >
                <span className="text-xl text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-slate-600 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-300 truncate group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
