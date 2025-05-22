import { motion } from "framer-motion";
import { FaTrashAlt, FaBolt, FaRecycle, FaExclamationTriangle } from "react-icons/fa";

export default function RaeeAwareness() {
  const items = [
    {
      icon: <FaTrashAlt className="text-red-400 text-3xl" />,
      title: "Rifiuti Speciali",
      text: "I RAEE non sono rifiuti comuni. Contengono sostanze inquinanti che richiedono un trattamento adeguato.",
    },
    {
      icon: <FaBolt className="text-yellow-400 text-3xl" />,
      title: "Ricchi di Risorse",
      text: "All'interno si trovano metalli preziosi come oro, rame e platino, recuperabili con processi avanzati.",
    },
    {
      icon: <FaRecycle className="text-green-400 text-3xl" />,
      title: "Economia Circolare",
      text: "Riciclare RAEE significa ridurre l'estrazione mineraria e reintegrare risorse nel ciclo produttivo.",
    },
    {
      icon: <FaExclamationTriangle className="text-orange-400 text-3xl" />,
      title: "Basso Tasso di Recupero",
      text: "Oltre il 60% dei RAEE in Europa non viene trattato correttamente. La nostra missione è cambiare questo dato.",
    },
  ];

  return (
    <section id="raee" className="py-24 px-6 bg-gradient-to-b from-emerald-950 via-neutral-950 to-black text-white">
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-block p-4 bg-emerald-900 rounded-full mb-4 shadow-lg">
        <FaExclamationTriangle className="text-yellow-400 text-5xl" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Perché i RAEE non sono rifiuti come gli altri
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          I Rifiuti di Apparecchiature Elettriche ed Elettroniche contengono sostanze inquinanti e metalli preziosi.
          Trattarli come semplici rifiuti è un errore pericoloso. Noi li recuperiamo responsabilmente.
        </p>
      </motion.div>

 <div className="flex overflow-x-auto space-x-4 px-1 sm:hidden">
        {items.map(({ title, text, icon }, index) => (
          <motion.div
            key={index}
            className="min-w-[260px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mb-3">
              {icon}
            </div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="text-gray-300 text-sm mt-2">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* Layout griglia per tablet e desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-10 px-4">
        {items.map(({ title, text, icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl min-h-[240px]"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-inner mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}