// src/Pages/vitrine/VitrinePage.tsx
import { useRef } from "react";
import HeroImg from "../assets/hero-dental.jpg";   // mets ta propre image

export default function VitrinePage() {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-sans text-gray-800">
      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg mb-6">
          Matériel & consommables dentaires
        </h1>
        <a
          href="/boutique"
          className="px-8 py-4 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Accéder à la boutique
        </a>
      </section>

      {/* AVANTAGES */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          ["⭐", "Qualité certifiée CE"],
          ["🚚", "Livraison 24-48 h"],
          ["🦷", "Support technico-dentaire"],
        ].map(([icon, label]) => (
          <div key={label}>
            <div className="text-4xl mb-4">{icon}</div>
            <p className="text-lg font-semibold">{label}</p>
          </div>
        ))}
      </section>

      {/* RÉALISATIONS / TÉMOIGNAGES */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Ils nous font confiance</h2>
        {/* Remplace par un vrai carousel (Swiper, Splide…) */}
        <div className="flex overflow-x-auto gap-6 px-6">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src={`/assets/real${n}.jpg`}
              alt={`Réa ${n}`}
              className="h-48 w-72 object-cover rounded-lg shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} className="py-20 px-6" id="contact">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="border p-3 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="border p-3 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>

        {/* Coordonnées en dessous */}
        <div className="mt-10 text-center text-sm">
          <p>📍 12 rue de l’Odonto, 75000 Paris</p>
          <p>☎ 09&nbsp;88&nbsp;77&nbsp;66&nbsp;55</p>
          <p>✉ contact@dentashop.fr</p>
        </div>
      </section>
    </div>
  );
}
