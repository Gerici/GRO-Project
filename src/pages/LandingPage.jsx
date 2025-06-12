import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Mission from "../components/landing/Mission";
import RaeeAwareness from "../components/landing/RaeeAwareness";
import RAEETracker from "../components/landing/RAEETracker";
import HowItWorks from "../components/landing/HowItWorks";
import Team from "../components/landing/Team";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

console.log("🔍", import.meta.env);

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Sfondo narrativo visivo */}
      <div className="absolute inset-0 z-0">
        <div className="h-[500vh] w-full bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Fasi narrative (semplificate con gradienti e svg) */}
          <div className="sticky top-0 h-screen">
            <div className="absolute top-0 h-screen w-full bg-opacity-10 bg-[url('/images/ewaste.svg')] bg-no-repeat bg-top bg-contain"></div>
          </div>
          <div className="sticky top-0 h-screen">
            <div className="absolute top-0 h-screen w-full bg-opacity-10 bg-[url('/images/circuit.svg')] bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="sticky top-0 h-screen">
            <div className="absolute top-0 h-screen w-full bg-opacity-10 bg-[url('/images/metals.svg')] bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="sticky top-0 h-screen">
            <div className="absolute top-0 h-screen w-full bg-opacity-10 bg-[url('/images/rebirth.svg')] bg-no-repeat bg-bottom bg-contain"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          id="mission"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Mission />
        </motion.div>

        <motion.div
          id="raee-awareness"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <RaeeAwareness />
        </motion.div>

        <motion.div
          id="raee-tracker"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <RAEETracker />
        </motion.div>


        <motion.div
          id="how"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <HowItWorks />
        </motion.div>

        <motion.div
          id="team"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Team />
        </motion.div>

        <motion.div
          id="contact"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}