import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaScrewdriverWrench,
  FaRecycle,
  FaFlask,
  FaArrowRotateRight,
} from "react-icons/fa6";

const steps = [
  {
    title: "Raccolta e Smontaggio",
    description:
      "Raccogliamo dispositivi elettronici e li smontiamo in modo sicuro per separare le risorse.",
    icon: <FaScrewdriverWrench className="text-emerald-400 text-2xl" />,
  },
  {
    title: "Recupero Metalli",
    description:
      "I materiali elettronici vengono trattati e i metalli preziosi vengono recuperati.",
    icon: <FaRecycle className="text-emerald-400 text-2xl" />,
  },
  {
    title: "Trattamento Chimico",
    description:
      "Attraverso processi chimici avanzati, estraiamo il metallo puro per riutilizzarlo.",
    icon: <FaFlask className="text-emerald-400 text-2xl" />,
  },
  {
    title: "Ritorno alla Produzione",
    description:
      "I metalli purificati sono pronti per essere reintegrati nel ciclo di produzione.",
    icon: <FaArrowRotateRight className="text-emerald-400 text-2xl" />,
  },
];

function AnimatedDot() {
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let frameId;
    const animate = (time) => {
      if (!pathRef.current || !dotRef.current) return;

      const length = pathRef.current.getTotalLength();
      const progress = ((time / 1000) % 6) / 6;
      const point = pathRef.current.getPointAtLength(progress * length);

      dotRef.current.setAttribute("cx", point.x.toString());
      dotRef.current.setAttribute("cy", point.y.toString());

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <g>
      <path
        ref={pathRef}
        d="M50 0 
           C 50 100, 20 100, 20 200 
           S 80 300, 50 400 
           S 20 500, 50 600 
           S 80 700, 50 800"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        className="drop-shadow-[0_0_4px_#10b98166]"
      />
      <motion.circle
        ref={dotRef}
        r="8"
        fill="#10b981"
        className="drop-shadow-md"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      />
    </g>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative px-6 py-24 bg-black overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-white">Dal </span>
        <span className="text-emerald-400">Rifiuto</span>
        <span className="text-white"> al </span>
        <span className="text-emerald-400">Ritorno</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Ogni passaggio è progettato per ridare valore ai metalli preziosi contenuti nei dispositivi elettronici.
      </motion.p>

      {/* Timeline Desktop */}
      <svg
        viewBox="0 0 100 800"
        className="absolute left-1/2 transform -translate-x-1/2 z-0 hidden md:block pointer-events-none"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100px" }}
      >
        <AnimatedDot />
      </svg>

      <div className="space-y-24 relative z-10 max-w-5xl mx-auto hidden md:block">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-16 h-16 bg-emerald-900 bg-opacity-30 border border-emerald-500 rounded-xl flex justify-center items-center shadow-md hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl w-full max-w-xl hover:border-emerald-500 hover:shadow-emerald-500/30 transition duration-300">
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline Mobile migliorata */}
      <div className="relative space-y-12 md:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-16 pr-4"
          >
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-emerald-500 bg-opacity-20 border border-emerald-500 flex items-center justify-center shadow-md">
              <div className="text-emerald-400 text-xl">{step.icon}</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 shadow-lg hover:border-emerald-500 hover:shadow-emerald-500/30 transition duration-300">
              <h3 className="text-white text-base font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}