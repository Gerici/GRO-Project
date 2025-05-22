import { useState } from "react";
import {
  FaLeaf,
  FaTimes,
  FaBars,
  FaPlug,
  FaMicrochip,
  FaRecycle,
  FaTools,
  FaUsers,
  FaEnvelope,
  FaSignInAlt,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Missione", href: "#mission", icon: <FaPlug /> },
    { label: "RAEE", href: "#raee", icon: <FaRecycle /> },
    { label: "RAEE Tracker", href: "#raee-tracker", icon: <FaMicrochip /> },
    { label: "Come Funziona", href: "#how", icon: <FaTools /> },
    { label: "Team", href: "#team", icon: <FaUsers /> },
    { label: "Contatti", href: "#contact", icon: <FaEnvelope /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 font-bold text-xl group">
          <FaLeaf className="text-green-400 animate-pulse group-hover:scale-110 transition-transform" />
          <span className="text-white">Geri</span>
          <span className="text-yellow-400">Recovery</span>
          <span className="text-white">Ore</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-6">
          <div className="flex-1 flex justify-center gap-8 text-white text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative group transition-all duration-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="ml-4">
            <a
              href="/login"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-md"
            >
              <FaSignInAlt />
              Accedi alla Piattaforma
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-white z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={toggleMenu}
              className="flex items-center gap-3 text-xl hover:text-emerald-400 transition-all"
            >
              <span className="text-emerald-400">{item.icon}</span>
              {item.label}
            </a>
          ))}

          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full text-base font-semibold transition duration-300 shadow-lg mt-4"
          >
            <FaSignInAlt />
            Accedi alla Piattaforma
          </a>
        </div>

        {/* Close Icon */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
        ><FaTimes />
        </button>
      </div>
    </nav>
  );
}