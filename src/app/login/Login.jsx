// app/login/Login.jsx
import React from 'react';
import LoginForm from './LoginForm';
import PlatformNavbar from '@/components/platform/PlatformNavbar';
import { ShieldCheck, Search, Settings, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden relative font-sans">
      <PlatformNavbar />

      {/* Tech grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="techGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#10B981" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      {/* Contenuto */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl bg-gray-900/70 border border-gray-700 rounded-3xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center backdrop-blur-md"
        >
          {/* Sinistra */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <ShieldCheck className="text-green-500 w-20 h-20 z-10 drop-shadow-lg" />
              <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circle" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                </defs>
                <text fontSize="6" fill="#34d399" fontWeight="bold">
                  <textPath href="#circle" startOffset="0%">
                    · TRACCIA · GESTISCI · RECUPERA · 
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
              <div className="flex flex-col items-center">
                <Search className="w-5 h-5 text-emerald-400 mb-1" />
                <span className="text-emerald-400">Traccia</span>
              </div>
              <div className="flex flex-col items-center">
                <Settings className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-blue-400">Gestisci</span>
              </div>
              <div className="flex flex-col items-center">
                <Repeat className="w-5 h-5 text-yellow-400 mb-1" />
                <span className="text-yellow-400">Recupera</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              RAEE Tracker è il cuore digitale per il recupero consapevole dei RAEE.
              Un accesso riservato, sicuro e progettato per chi fa la differenza.
            </p>
          </div>

          {/* Destra - Form */}
          <LoginForm />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 border-t border-gray-800 py-4 text-center text-xs text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="mb-1">
          &copy; {new Date().getFullYear()} <span className="text-white">Geri</span>
          <span className="text-yellow-500">Recovery</span>
          <span className="text-white">Ore</span> · Powered by RAEE Tracker ·
        </p>
        <p
          className="text-emerald-400 font-semibold tracking-wide animate-pulse"
          style={{ textShadow: "0 0 8px rgba(34, 197, 94, 0.5), 0 0 12px rgba(34, 197, 94, 0.3)" }}
        >
          Eco-friendly 100%
        </p>
      </motion.footer>
    </div>
  );
}
