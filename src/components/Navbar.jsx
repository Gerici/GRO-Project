import { useState } from "react";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Missione", href: "#mission" },
    { label: "RAEE", href: "#raee" },
    { label: "Come Funziona", href: "#processo" },
    { label: "Team", href: "#team" },
    { label: "Contatti", href: "#contatti" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 via-black/80 to-black/70 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-[0.75px] font-bold text-xl">
          <FaLeaf className="text-green-400 animate-pulse" />
          <span className="text-white">Geri</span>
          <span className="text-yellow-400">Recovery</span>
          <span className="text-white">Ore</span>
        </a>

        <div className="hidden md:flex gap-10 text-white text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger menu modern style */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center focus:outline-none"
          >
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 pb-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 border-b border-gray-700 hover:text-emerald-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}