"use client";
import { useState } from "react";
import { Icon } from "./ui";
const team = [
  {
    name: "Aïcha D.",
    role: "Service client",
    time: "08:00",
    status: "Présente",
    initials: "AD",
    color: "peach",
  },
  {
    name: "Koffi M.",
    role: "Opérations",
    time: "08:24",
    status: "À vérifier",
    initials: "KM",
    color: "lilac",
  },
  {
    name: "Fatou B.",
    role: "Commercial",
    time: "07:52",
    status: "Présente",
    initials: "FB",
    color: "mint",
  },
  {
    name: "Yann A.",
    role: "Opérations",
    time: "—",
    status: "Sans pointage",
    initials: "YA",
    color: "sand",
  },
];
export default function Dashboard({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState("overview"),
    [filter, setFilter] = useState("Tous");
  const visible =
    filter === "Tous" ? team : team.filter((t) => t.status === filter);
  return (
    <div
      className={`dashboard time-dashboard ${compact ? "dashboard-compact" : ""}`}
    >
      <aside className="dash-sidebar">
        <div className="dash-brand">
          <Icon name="clock" />
          timetracker.
        </div>
        <p>ENTREPRISE DE DÉMONSTRATION</p>
        <div className="company">
          <span>A</span>
          <div>
            Atelier Akwaba<small>Données fictives</small>
          </div>
        </div>
        {[
          ["overview", "chart", "Vue d’ensemble"],
          ["team", "people", "Mon équipe"],
          ["requests", "message", "Réclamations"],
        ].map(([id, icon, t]) => (
          <button key={id} aria-pressed={tab === id} onClick={() => setTab(id)}>
            <Icon name={icon} />
            {t}
          </button>
        ))}
        <div className="dash-help">
          <Icon name="spark" />
          <strong>Chaque journée compte.</strong>
          <span>Des repères communs pour mieux se retrouver.</span>
        </div>
        <span className="dash-user">
          ML{" "}
          <span>
            Manager de démo<small>Accès illustratif</small>
          </span>
        </span>
      </aside>
      <section className="dash-main">
        <header>
          <span>
            Atelier Akwaba /{" "}
            {tab === "requests"
              ? "Réclamations"
              : tab === "team"
                ? "Équipe"
                : "Vue d’ensemble"}
          </span>
          <b>ML</b>
        </header>
        <div className="dash-title">
          <div>
            <p>LES BONNES INFORMATIONS, ENSEMBLE.</p>
            <h3>
              {tab === "requests"
                ? "Prendre le temps d’écouter."
                : tab === "team"
                  ? "Votre équipe, au complet."
                  : "Bonjour, votre équipe avance."}
            </h3>
            <span>Une journée d’exemple · 26 novembre 2026</span>
          </div>
          <span className="sample-tag">Données fictives</span>
        </div>
        {tab === "requests" ? (
          <div className="request-demo">
            <Icon name="message" />
            <span>EXEMPLE DE DEMANDE</span>
            <h4>Un pointage à compléter.</h4>
            <p>
              Un membre de l’équipe signale un oubli de pointage. Le contexte
              est à examiner par le responsable.
            </p>
            <b>À examiner · Aucune décision automatique</b>
          </div>
        ) : (
          <>
            <div className="dash-kpis">
              <article>
                <span>Équipe suivie</span>
                <strong>
                  4 <small>personnes</small>
                </strong>
                <p>Exemple de service</p>
              </article>
              <article>
                <span>Avec pointage</span>
                <strong>
                  3 <small>personnes</small>
                </strong>
                <p>Sur cette journée fictive</p>
              </article>
              <article>
                <span>À vérifier</span>
                <strong>
                  1 <small>arrivée</small>
                </strong>
                <p>Un contexte à préciser</p>
              </article>
            </div>
            {tab === "overview" && (
              <div className="team-rhythm">
                <header>
                  <h4>Le rythme de votre équipe.</h4>
                  <span>Exemple de semaine</span>
                </header>
                <div
                  className="rhythm-grid"
                  role="img"
                  aria-label="Illustration de la répartition des présences sur cinq jours, sans données réelles"
                >
                  {["LUN", "MAR", "MER", "JEU", "VEN"].map((d, i) => (
                    <div key={d}>
                      <span>{d}</span>
                      <i style={{ height: [65, 90, 77, 110, 85][i] }} />
                      <b>{[3, 4, 3, 4, 3][i]}</b>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="team-table">
              <header>
                <h4>Les visages de votre journée.</h4>
                {!compact && (
                  <select
                    aria-label="Filtrer les présences"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option>Tous</option>
                    <option>Présente</option>
                    <option>À vérifier</option>
                    <option>Sans pointage</option>
                  </select>
                )}
              </header>
              {visible.map((t) => (
                <article key={t.name}>
                  <span className={`avatar avatar-${t.color}`}>
                    {t.initials}
                  </span>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </div>
                  <span className="team-time">{t.time}</span>
                  <em
                    className={
                      t.status === "Présente"
                        ? "paid"
                        : t.status === "À vérifier"
                          ? "pending"
                          : "neutral-status"
                    }
                  >
                    {t.status}
                  </em>
                </article>
              ))}
            </div>
          </>
        )}
        <p className="dash-footnote">
          Maquette interactive · Personnes et données fictives.
        </p>
      </section>
    </div>
  );
}
