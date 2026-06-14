import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-600 shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-100/50 dark:border-slate-700/50 dark:bg-slate-800/90 dark:text-slate-300 dark:shadow-slate-950/30 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Scroll to top"
      type="button"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
