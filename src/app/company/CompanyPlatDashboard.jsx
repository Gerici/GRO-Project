import React, { useState } from 'react';
import {
  FileText, Upload, Bell, LogOut, Layers, LineChart, Eye, Download,
  CircleCheck, AlertTriangle
} from 'lucide-react';

const mockFirList = [
  { id: 'FIR101', type: 'Computer', quantity: 40, status: 'pending', date: '2025-06-10' },
  { id: 'FIR102', type: 'Monitor', quantity: 25, status: 'in_review', date: '2025-06-09' },
  { id: 'FIR103', type: 'Stampante', quantity: 12, status: 'approved', date: '2025-06-07' }
];

const StatusPill = ({ status }) => {
  const map = {
    pending: ['bg-yellow-100 text-yellow-800', 'Inviato'],
    in_review: ['bg-orange-100 text-orange-800', 'In Revisione'],
    approved: ['bg-green-100 text-green-800', 'Approvato'],
    rejected: ['bg-red-100 text-red-800', 'Rifiutato']
  };
  const [bg, label] = map[status] || ['bg-gray-100 text-gray-800', status];
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bg}`}>{label}</span>;
};

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('fir');

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gray-50 border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Azienda</h1>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 text-gray-500" />
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 bg-gray-100 border-r min-h-screen p-4 space-y-2">
          {[
            { id: 'fir', label: 'I miei FIR', icon: FileText },
            { id: 'uploads', label: 'Documenti caricati', icon: Upload },
            { id: 'storage', label: 'Magazzino RAEE', icon: Layers },
            { id: 'stats', label: 'Statistiche', icon: LineChart }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === id
                  ? 'bg-emerald-100 text-emerald-800 font-semibold'
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 space-y-6">
          {activeTab === 'fir' && (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">I miei FIR</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  <Upload className="h-4 w-4" />
                  Nuovo FIR
                </button>
              </div>

              <div className="overflow-x-auto bg-white shadow border rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">ID FIR</th>
                      <th className="px-6 py-3 text-left">Tipo</th>
                      <th className="px-6 py-3 text-left">Quantità</th>
                      <th className="px-6 py-3 text-left">Stato</th>
                      <th className="px-6 py-3 text-left">Data</th>
                      <th className="px-6 py-3 text-left">Azioni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {mockFirList.map((fir) => (
                      <tr key={fir.id} className="hover:bg-gray-50">
                        <td className="px-6 py-3 font-mono text-emerald-600">{fir.id}</td>
                        <td className="px-6 py-3">{fir.type}</td>
                        <td className="px-6 py-3">{fir.quantity}</td>
                        <td className="px-6 py-3"><StatusPill status={fir.status} /></td>
                        <td className="px-6 py-3">{fir.date}</td>
                        <td className="px-6 py-3 flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800"><Eye className="h-4 w-4" /></button>
                          <button className="text-gray-600 hover:text-gray-800"><Download className="h-4 w-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'uploads' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Documenti caricati</h2>
              <div className="p-6 bg-gray-100 border border-dashed border-gray-300 text-center rounded-lg text-sm text-gray-500">
                Nessun documento caricato. Carica file relativi ai FIR in lavorazione.
              </div>
            </div>
          )}

          {activeTab === 'storage' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Magazzino RAEE</h2>
              <div className="p-6 bg-gray-100 border border-dashed border-gray-300 text-center rounded-lg text-sm text-gray-500">
                Nessun RAEE in deposito.
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Statistiche FIR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white shadow rounded-xl border">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">FIR Totali</p>
                      <p className="text-2xl font-bold text-emerald-700">132</p>
                    </div>
                    <CircleCheck className="text-emerald-500 h-6 w-6" />
                  </div>
                </div>

                <div className="p-4 bg-white shadow rounded-xl border">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">FIR Rifiutati</p>
                      <p className="text-2xl font-bold text-red-600">3</p>
                    </div>
                    <AlertTriangle className="text-red-400 h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
  