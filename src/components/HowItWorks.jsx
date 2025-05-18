import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaTools, FaRecycle, FaIndustry, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Raccolta e Smontaggio",
    description: "Raccogliamo dispositivi elettronici e li smontiamo in modo sicuro per separare le risorse.",
    icon: <FaTools className="text-yellow-400 text-2xl" />,
  },
  {
    title: "Recupero Metalli",
    description: "I materiali elettronici vengono trattati e i metalli preziosi vengono recuperati.",
    icon: <FaRecycle className="text-green-400 text-2xl" />,
  },
  {
    title: "Trattamento Chimico",
    description: "Attraverso processi chimici avanzati, estraiamo il metallo puro per riutilizzarlo.",
    icon: <FaIndustry className="text-blue-400 text-2xl" />,
  },
  {
    title: "Ritorno alla Produzione",
    description: "I metalli purificati sono pronti per essere reintegrati nel ciclo di produzione.",
    icon: <FaCheckCircle className="text-orange-400 text-2xl" />,
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
      <circle
        ref={dotRef}
        r="6"
        fill="#10b981"
        className="drop-shadow-md"
      />
    </g>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative px-6 py-24  bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Come Funziona
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Dal rifiuto al riutilizzo: ogni passaggio è progettato per dare nuova vita ai metalli preziosi.
      </motion.p>

      <svg
        viewBox="0 0 100 800"
        className="absolute left-1/2 transform -translate-x-1/2 z-0 hidden md:block pointer-events-none"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100px" }}
      >
        <AnimatedDot />
      </svg>

      <div className="space-y-32 relative z-10 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-xl z-20">
              {step.icon}
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-6 w-full max-w-md text-white z-20">
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
