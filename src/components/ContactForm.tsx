"use client";
import { useState } from "react";
import { contact } from "@/data/site";
export default function ContactForm() {
  const [ready, setReady] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setReady(
      contact.whatsapp +
        "?text=" +
        encodeURIComponent(
          `Bonjour Daniel, je souhaite découvrir TimeTracker.\nNom : ${f.get("name")}\nEntreprise : ${f.get("company")}\nBesoin : ${f.get("need")}\n${f.get("message")}`,
        ),
    );
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Votre nom
        <input name="name" required maxLength={100} autoComplete="name" />
      </label>
      <label>
        Votre entreprise
        <input
          name="company"
          required
          maxLength={100}
          autoComplete="organization"
        />
      </label>
      <label>
        Votre besoin
        <select name="need">
          <option>Découvrir la plateforme</option>
          <option>Organiser le suivi des présences</option>
          <option>Suivre plusieurs entreprises ou services</option>
          <option>Étudier une extension ou une intégration</option>
          <option>Être accompagné sur mon projet TimeTracker</option>
        </select>
      </label>
      <label>
        Parlez-nous de votre organisation
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          placeholder="Vos équipes, vos outils et ce que vous souhaitez simplifier…"
        />
      </label>
      <p className="fineprint">
        Ce formulaire prépare un message WhatsApp. Il n’envoie rien
        automatiquement. Ne communiquez ni données personnelles d’employés ni
        justificatifs confidentiels.
      </p>
      <button type="submit" className="button">
        Préparer ma demande
      </button>
      {ready && (
        <div className="contact-ready" role="status">
          <p>
            Votre message est prêt. Ouvrez WhatsApp pour le relire et l’envoyer
            à Daniel.
          </p>
          <a
            href={ready}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Ouvrir ma demande dans WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}
