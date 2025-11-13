import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-[#0b0b0b] border-t border-gray-800 text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Laxman Kale. All Rights Reserved.</p>
      <p className="mt-1">Built with React & Tailwind CSS</p>
    </footer>
  );
}
