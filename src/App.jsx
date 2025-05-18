import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RaeeAwareness from "./components/RaeeAwareness"; // Nuovo componente

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
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          id="mission"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Mission />
        </motion.div>

        {/* Nuovo componente RAEE Awareness */}
        <motion.div
          id="raee-awareness"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <RaeeAwareness />
        </motion.div>

        <motion.div
          id="how"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <HowItWorks />
        </motion.div>

        <motion.div
          id="team"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Team />
        </motion.div>

        <motion.div
          id="contact"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
