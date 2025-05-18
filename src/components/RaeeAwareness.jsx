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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-md hover:shadow-2xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}