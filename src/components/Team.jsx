import { motion } from "framer-motion";
import { FaUserTie, FaFlask, FaRecycle, FaLeaf } from "react-icons/fa";

// Dati con data di ingresso
const teamMembers = [
  {
    name: "Gianluca",
    role: "Founder & Developer",
    description: "Visionario del progetto GeriRecoveryOre, unisce tecnologia e sostenibilità.",
    icon: <FaUserTie className="text-4xl text-emerald-400 drop-shadow-lg" />,
    level: 0,
    joined: "Gen 2024"
  },
  {
    name: "Alba",
    role: "Eco Designer",
    description: "Progetta soluzioni visive che riflettano l'anima ecologica del brand.",
    icon: <FaLeaf className="text-3xl text-lime-400 drop-shadow" />,
    level: 1,
    joined: "Mar 2024"
  },
  {
    name: "Lorenzo",
    role: "Process Engineer",
    description: "Coordina il flusso di recupero in modo sostenibile ed efficiente.",
    icon: <FaRecycle className="text-3xl text-cyan-400 drop-shadow" />,
    level: 1,
    joined: "Apr 2024"
  },
  {
    name: "Mira",
    role: "Chemical Specialist",
    description: "Esperta nell'estrazione green dei metalli dai RAEE.",
    icon: <FaFlask className="text-3xl text-sky-400 drop-shadow" />,
    level: 1,
    joined: "Apr 2024"
  },
];

export default function Team() {
  return (
    <section
      id="Team"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden"
    >
      {/* Animated Energy Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/20 to-transparent animate-pulse opacity-50" />
        <div className="absolute right-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-cyan-400/20 to-transparent animate-pulse delay-300 opacity-30" />
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-lime-400/20 to-transparent animate-pulse delay-500 opacity-30" />
      </div>

      {/* Titolo */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center text-white relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Il Team <span className="text-emerald-400">Energico</span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 text-lg md:text-xl mt-4 mb-24 relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Una squadra unita dalla missione di rivoluzionare il riciclo elettronico con passione e innovazione.
      </motion.p>

      {/* Founder */}
      <div className="relative z-10 mb-24 flex justify-center">
        {teamMembers
          .filter((m) => m.level === 0)
          .map((member, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-full max-w-sm text-center shadow-xl transform transition-transform hover:rotate-[0.5deg] hover:scale-[1.02] duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{member.icon}</div>
              <h3 className="text-xl text-white font-semibold">{member.name}</h3>
              <p className="text-emerald-400 text-sm">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">{member.description}</p>
              <p className="text-xs text-gray-500 mt-3 italic">Entrato: {member.joined}</p>
            </motion.div>
          ))}
      </div>

      {/* Collaboratori in griglia + timeline */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {teamMembers
          .filter((m) => m.level === 1)
          .map((member, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl shadow-md text-center relative transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30 hover:-rotate-[0.3deg]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Linea verticale timeline */}
              <div className="absolute left-1 top-1 h-[90%] w-[2px] bg-gradient-to-b from-emerald-500/30 to-transparent rounded-full opacity-70" />

              <div className="flex justify-center mb-4">{member.icon}</div>
              <h3 className="text-lg text-white font-semibold">{member.name}</h3>
              <p className="text-emerald-300 text-sm">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">{member.description}</p>
              <p className="text-xs text-gray-500 mt-3 italic">Entrato: {member.joined}</p>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
