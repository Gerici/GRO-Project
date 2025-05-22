import { motion } from "framer-motion";
import {
  FaUserShield,
  FaFileSignature,
  FaEye,
  FaBell,
  FaSyncAlt,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    title: "Registrazione Sicura",
    description: "Aziende e scuole si registrano in pochi passaggi, accedendo a una dashboard dedicata.",
    icon: <FaUserShield className="text-emerald-400 text-2xl" />,
  },
  {
    title: "FIR Digitale",
    description: "Compila e firma i Formulari Identificativi del Rifiuto digitalmente, in totale conformità normativa.",
    icon: <FaFileSignature className="text-lime-400 text-2xl" />,
  },
  {
    title: "Tracciamento Intelligente",
    description: "Segui in tempo reale il ciclo di vita dei RAEE, con notifiche e aggiornamenti continui.",
    icon: <FaEye className="text-sky-400 text-2xl" />,
  },
  {
    title: "Notifiche Smart",
    description: "Ricevi promemoria, segnalazioni e scadenze in tempo reale, automatizzando la gestione.",
    icon: <FaBell className="text-amber-400 text-2xl" />,
  },
  {
    title: "Recupero & Vendita",
    description: "Gestisci in trasparenza la fase finale: recupero dei materiali preziosi e rivendita etica.",
    icon: <FaSyncAlt className="text-emerald-400 text-2xl" />,
  },
  {
    title: "Dashboard Impatto",
    description: "Visualizza KPI ambientali, tracciabilità, impatto economico e report per ogni movimentazione.",
    icon: <FaChartLine className="text-indigo-400 text-2xl" />,
  },
];

export default function RAEETracker() {
  return (
    <section
      id="raee-tracker"
      className="w-full py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-emerald-400">RAEE Tracker</span><br />
          La piattaforma per una gestione trasparente e digitale
        </h2>
        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
          Automatizza ogni fase della gestione RAEE, dalla registrazione alla vendita dei metalli.
          Una soluzione scalabile, conforme e progettata per un futuro circolare.
        </p>
        <motion.a
          href="/login"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold mt-8 py-3 px-10 rounded-full shadow-lg transition duration-300"
        >
          🚀 Accedi alla piattaforma
        </motion.a>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {steps.map(({ title, description, icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl min-h-[240px]"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-inner mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{description}</p>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-black bg-emerald-400 shadow-lg" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
