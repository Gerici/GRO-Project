// app/login/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, KeyRound, Eye, EyeOff, ShieldCheck, LogIn } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com") {
      navigate("/admin/dashboard");
    } else if (email && password) {
      navigate("/company/dashboard");
    } else {
      alert("Credenziali non valide.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 text-white">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-green-400" />
        <h2 className="text-xl font-semibold text-white">
          Accesso Riservato - RAEE Tracker
        </h2>
      </div>

      <span className="inline-block text-xs text-emerald-400 bg-emerald-900/30 px-3 py-1 rounded-full font-medium w-fit">
        Accesso Certificato · Sicuro · Tracciato
      </span>

      <div>
        <label className="block text-sm font-semibold mb-1">Email</label>
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700 focus-within:ring-2 focus-within:ring-emerald-500">
          <Mail className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="email"
            required
            className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Password</label>
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700 focus-within:ring-2 focus-within:ring-emerald-500">
          <KeyRound className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type={showPassword ? "text" : "password"}
            required
            className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-400 hover:text-emerald-400 transition"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 group"
      >
        Accedi
        <LogIn className="w-4 h-4 text-white opacity-80 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </form>
  );
}
