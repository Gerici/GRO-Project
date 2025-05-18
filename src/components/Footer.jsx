import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-6 text-gray-400">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Logo e Mission */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold tracking-wide mb-2 flex gap-[1px]">
            <span className="text-white">Geri</span>
            <span className="text-yellow-500">Recovery</span>
            <span className="text-white">Ore</span>
          </h3>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed">
            Riaccendiamo ciò che ormai è spento. Recuperiamo metalli preziosi dai RAEE, promuovendo un’economia circolare più consapevole.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaInstagram />, link: "https://www.instagram.com" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com" },
              { icon: <FaTiktok />, link: "https://www.tiktok.com" },
              { icon: <FaXTwitter />, link: "https://www.twitter.com" },
            ].map(({ icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-400 hover:text-white transition text-xl"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigazione */}
        <div>
          <h4 className="text-white font-semibold mb-4">Naviga</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#mission" className="hover:text-white transition">Missione</a></li>
            <li><a href="#raee-awareness" className="hover:text-white transition">RAEE</a></li>
            <li><a href="#how" className="hover:text-white transition">Come funziona</a></li>
            <li><a href="#team" className="hover:text-white transition">Team</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contatti</a></li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contatti</h4>
          <p className="text-sm">Hai RAEE da smaltire? Collaboriamo.</p>
          <div className="mt-3 text-sm leading-6">
            <p>Email: <a href="mailto:info@gerirecoveryore.it" className="hover:text-white">info@gerirecoveryore.it</a></p>
            <p>Tel: <a href="tel:+393248650840" className="hover:text-white">+39 324 865 0840</a></p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-600 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="mb-1">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white">Geri</span>
          <span className="text-yellow-500">Recovery</span>
          <span className="text-white">Ore</span>. Tutti i diritti riservati.
        </p>
        <p
          className="text-emerald-400 font-semibold tracking-wide animate-pulse"
          style={{
            textShadow: "0 0 8px rgba(34, 197, 94, 0.5), 0 0 12px rgba(34, 197, 94, 0.3)"
          }}
        >
          Eco-friendly 100%
        </p>
      </motion.div>
    </footer>
  );
}
