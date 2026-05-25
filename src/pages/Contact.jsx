import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

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

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="surface-card group flex min-h-28 items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/80"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg ${
                    i % 3 === 0
                      ? "bg-blue-50 text-blue-700"
                      : i % 3 === 1
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-700">
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
