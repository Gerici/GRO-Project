import { motion } from "framer-motion";
import { FaSeedling, FaGlobe, FaRecycle, FaLeaf } from "react-icons/fa";

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 px-6 bg-gradient-to-b from-black via-emerald-950/30 to-emerald-950 text-white">
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

      <div className="mt-20 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          {
            icon: <FaRecycle className="text-3xl text-emerald-400 mb-4" />,
            title: "Economia Circolare",
            desc: "Reinseriamo i metalli nel ciclo produttivo riducendo sprechi e inquinamento."
          },
          {
            icon: <FaSeedling className="text-3xl text-lime-400 mb-4" />,
            title: "Sostenibilità",
            desc: "Ogni azione è studiata per minimizzare l'impatto ambientale lungo tutta la filiera."
          },
          {
            icon: <FaGlobe className="text-3xl text-sky-400 mb-4" />,
            title: "Innovazione Tracciabile",
            desc: "Utilizziamo tecnologie moderne per monitorare ogni fase del recupero."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}