// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaRocket, FaLeaf } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background dinamico più ricco */}
      <div className="absolute inset-0 -z-10">
        {/* Griglia astratta */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b98122_1px,transparent_1px)] [background-size:24px_24px] opacity-10 animate-pulse" />

        {/* Particelle tech animate */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-950 opacity-90" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#10b98122,transparent)] opacity-30 animate-[pulse_8s_infinite]" />
        </div>

        {/* Foschia dinamica */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent backdrop-blur-sm" />
      </div>

      {/* Contenuto */}
      <motion.div
        className="text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Badge ambientale */}
        <motion.div
          className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-400 text-emerald-300 px-3 py-1 text-xs uppercase tracking-wide rounded-full mb-4 shadow-inner backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FaLeaf className="text-emerald-400 animate-pulse" />
          Green Tech Vision
        </motion.div>

        {/* Titolo */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-md animate-[pulse_4s_infinite]">
          Riaccendiamo ciò che ormai è spento
        </h1>

        {/* Descrizione */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
          Recuperiamo metalli preziosi dai RAEE, promuovendo un’economia circolare consapevole.
          <br />
          <span className="text-emerald-400 font-semibold">GeriRecoveryOre</span> è la rivoluzione verde del riciclo elettronico.
        </p>

        {/* CTA */}
        <motion.a
          href="#mission"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full text-sm md:text-base transition shadow-lg"
        >
          <FaRocket className="text-lg" />
          Inizia ora
        </motion.a>
      </motion.div>

      {/* Glow/foschia inferiore */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
