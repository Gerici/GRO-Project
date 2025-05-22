import React from 'react';
import LoginForm from './LoginForm';
import PlatformNavbar from '@/components/platform/PlatformNavbar';
import { ShieldCheck, Search, Settings, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans overflow-hidden">
      <PlatformNavbar />

      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1600 900" fill="none">
          <g stroke="#10B981" strokeWidth="0.3">
            {Array.from({ length: 80 }).map((_, i) => (
              <line key={`v${i}`} x1={(i + 1) * 20} y1="0" x2={(i + 1) * 20} y2="900" opacity="0.05" />
            ))}
            {Array.from({ length: 45 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={(i + 1) * 20} x2="1600" y2={(i + 1) * 20} opacity="0.05" />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-16 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-5xl bg-gray-900/70 border border-gray-700 shadow-2xl rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center backdrop-blur-lg animate-pulse-slow"
        >
          {/* LEFT - Icon + Features */}
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

          {/* RIGHT - Login Form */}
          <LoginForm />
        </motion.div>
      </div>

            <div>
                {/* 🌐 Footer info */}

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
          <span className="text-white">Ore</span> · Powered by RAEE Tracker ·
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
            </div>

    </div>
  );
}