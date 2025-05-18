import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [userType, setUserType] = useState("privato");
  const [thirdParty, setThirdParty] = useState(false);
  const [inviting, setInviting] = useState(false);

  const inputClass = "w-full p-2 rounded bg-black/40 border border-white/10 text-white";

  const commonFields = (
    <>
      <label className="block mb-2 text-sm font-medium text-white">Email</label>
      <input
        type="email"
        className={inputClass + " mb-4"}
        placeholder="Inserisci la tua email"
        required
      />
      <label className="block mb-2 text-sm font-medium text-white">Descrizione RAEE</label>
      <textarea
        className={inputClass + " mb-4"}
        rows={3}
        placeholder="Es. Frigorifero non funzionante, vecchio computer, ecc."
      />
    </>
  );

  const renderFields = () => {
    switch (userType) {
      case "azienda":
        return (
          <>
            <label className="block mb-2 text-sm font-medium text-white">Nome Azienda</label>
            <input className={inputClass} placeholder="Es. Elettronica S.p.A." />
            <label className="block mb-2 text-sm font-medium text-white">Referente</label>
            <input className={inputClass} placeholder="Nome e Cognome" />
            <label className="block mb-2 text-sm font-medium text-white">Quantità Stimata</label>
            <input className={inputClass} placeholder="Es. 15 PC, 5 stampanti" />
            {commonFields}
          </>
        );
      case "scuola":
        return (
          <>
            <label className="block mb-2 text-sm font-medium text-white">Nome Istituto</label>
            <input className={inputClass} placeholder="Es. Liceo Scientifico Galilei" />
            <label className="block mb-2 text-sm font-medium text-white">Referente Educativo</label>
            <input className={inputClass} placeholder="Nome e Cognome" />
            {commonFields}
          </>
        );
      default:
        return (
          <>
            <label className="block mb-2 text-sm font-medium text-white">Nome</label>
            <input className={inputClass} placeholder="Nome e Cognome" />
            <label className="block mb-2 text-sm font-medium text-white">Indirizzo per il ritiro</label>
            <input className={inputClass} placeholder="Via, CAP, Città" />
            {commonFields}
          </>
        );
    }
  };

  return (
    <section
      className="relative py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
      id="Contact"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contattaci per il Ritiro RAEE
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Aiutaci a recuperare metalli preziosi e ridurre i rifiuti elettronici. Il nostro servizio è gratuito per tutti.
        Puoi anche segnalare RAEE per conto di altri o invitare enti e aziende ad aderire.
      </motion.p>

      <div className="bg-black/30 border border-white/10 backdrop-blur-xl rounded-xl p-8 max-w-3xl mx-auto shadow-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            className={`rounded py-2 px-4 text-sm font-medium transition ${
              userType === "privato" ? "bg-emerald-500 hover:bg-emerald-400" : "bg-white/10 text-white"
            }`}
            onClick={() => setUserType("privato")}
          >
            Privato
          </button>
          <button
            className={`rounded py-2 px-4 text-sm font-medium transition ${
              userType === "azienda" ? "bg-emerald-500 hover:bg-emerald-400" : "bg-white/10 text-white"
            }`}
            onClick={() => setUserType("azienda")}
          >
            Azienda
          </button>
          <button
            className={`rounded py-2 px-4 text-sm font-medium transition ${
              userType === "scuola" ? "bg-emerald-500 hover:bg-emerald-400" : "bg-white/10 text-white"
            }`}
            onClick={() => setUserType("scuola")}
          >
            Scuola
          </button>
        </div>

        <form className="space-y-4">
          {renderFields()}

          <div className="mb-4">
            <label className="flex items-center gap-2 text-white text-sm">
              <input
                type="checkbox"
                checked={thirdParty}
                onChange={() => setThirdParty(!thirdParty)}
              />
              Sto segnalando a nome di altri
            </label>
            {thirdParty && (
              <div className="mt-4 space-y-2">
                <input className={inputClass} placeholder="Nome della persona o ente" />
                <input className={inputClass} placeholder="Email della persona o ente" />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-white text-sm">
              <input
                type="checkbox"
                checked={inviting}
                onChange={() => setInviting(!inviting)}
              />
              Voglio invitare un'azienda o ente a partecipare
            </label>
            {inviting && (
              <div className="mt-4 space-y-2">
                <input className={inputClass} type="email" placeholder="Email dell'invitato" />
                <p className="text-sm text-gray-400">Riceveranno un'email con un link per aderire al progetto.</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold py-2 rounded"
          >
            Invia Richiesta
          </button>
        </form>
      </div>

      {/* Background decorativo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/20 to-transparent animate-pulse opacity-50" />
        <div className="absolute right-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-cyan-400/20 to-transparent animate-pulse delay-300 opacity-30" />
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-lime-400/20 to-transparent animate-pulse delay-500 opacity-30" />
      </div>    </section>
  );
}
