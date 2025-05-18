// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background dinamico astratto */}
      <div className="absolute inset-0 -z-10">
        {/* Griglia astratta */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b98122_1px,transparent_1px)] [background-size:20px_20px] opacity-10 animate-pulse" />
        {/* Effetto foschia/dettagli tech */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-700/30 to-black/80 backdrop-blur-md" />
      </div>

      {/* Contenuto centrale */}
      <motion.div
        className="text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-emerald-500 hover:bg-emerald-400 bg-clip-text text-transparent">
          Riaccendiamo ciò che ormai è spento
        </h1>
        <p className="mt-6 text-gray-300 text-lg md:text-xl mb-8">
          Recuperiamo metalli preziosi dai RAEE, promuovendo un’economia circolare più consapevole.<br />
          <span className="text-emerald-400 font-semibold">GeriRecoveryOre</span> è la rivoluzione verde del riciclo elettronico.
        </p>
        <motion.a
          href="#mission"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full text-sm md:text-base transition"
        >
          <FaRocket className="text-lg" /> Inizia ora
        </motion.a>
      </motion.div>

      {/* Transizione verso il basso */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
