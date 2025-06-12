// src/app/admin/AdminPlatDashboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Building2, Loader2 } from "lucide-react";

export default function AdminDashboard() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data, error } = await supabase.from("companies").select("*");

      if (error) {
        console.error("Errore Supabase:", error);
      } else {
        setCompanies(data);
      }

      setLoading(false);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-8 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Building2 className="text-blue-600 w-7 h-7" />
        <h1 className="text-2xl font-bold">Dashboard Admin – Aziende registrate</h1>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 className="animate-spin w-5 h-5" />
          Caricamento aziende...
        </div>
      ) : companies.length > 0 ? (
        <ul className="space-y-4">
          {companies.map((company) => (
            <li
              key={company.id}
              className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <div className="text-lg font-semibold">{company.name}</div>
              <div className="text-sm text-gray-500">
                📄 P.IVA: {company.vat_number || "—"}<br />
                📍 {company.address || "Indirizzo non disponibile"}<br />
                📞 {company.phone || "—"} · ✉️ {company.email || "—"}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">Nessuna azienda trovata nel database.</p>
      )}
    </div>
  );
}
