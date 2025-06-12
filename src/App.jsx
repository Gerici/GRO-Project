import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./app/login/Login";
import CompanyDashboard from "./app/company/CompanyPlatDashboard";
import AdminDashboard from "./app/admin/AdminPlatDashboard";

console.log("🌍 ENV VITE:", import.meta.env);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Sito pubblico */}
        <Route path="/" element={<LandingPage />} />

        {/* Piattaforma */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/company" element={<CompanyDashboard />} />

        {/* 404 fallback */}
        <Route path="*" element={<div className="text-white p-10">Pagina non trovata</div>} />
      </Routes>
    </Router>
  );
}
