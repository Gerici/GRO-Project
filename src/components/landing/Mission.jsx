import { motion } from "framer-motion";
import { FaSeedling, FaGlobe, FaRecycle, FaLeaf } from "react-icons/fa";

export default function Mission() {
  const items = [
    {
      icon: <FaRecycle className="text-2xl text-emerald-400 mb-3" />,
      title: "Economia Circolare",
      desc: "Reinseriamo i metalli nel ciclo produttivo riducendo sprechi e inquinamento.",
    },
    {
      icon: <FaSeedling className="text-2xl text-lime-400 mb-3" />,
      title: "Sostenibilità",
      desc: "Ogni azione è studiata per minimizzare l'impatto ambientale lungo tutta la filiera.",
    },
    {
      icon: <FaGlobe className="text-2xl text-sky-400 mb-3" />,
      title: "Innovazione Tracciabile",
      desc: "Utilizziamo tecnologie moderne per monitorare ogni fase del recupero.",
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-emerald-950/30 to-emerald-950 text-white"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block p-4 bg-emerald-900 rounded-full mb-4 shadow-lg">
          <FaLeaf className="text-5xl text-green-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">La Nostra Missione</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Crediamo nel potere del recupero, della rigenerazione e della collaborazione per costruire un’economia circolare più consapevole.
        </p>
      </motion.div>

      {/* Card Container: scrollabile orizzontalmente su mobile */}
 <div className="flex overflow-x-auto space-x-4 px-1 sm:hidden">
        {items.map(({ title, desc, icon }, index) => (
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
            <p className="text-gray-300 text-sm mt-2">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Layout griglia per tablet e desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10 px-4">
        {items.map(({ title, desc, icon }, index) => (
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
            <p className="text-gray-300 mt-2 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
