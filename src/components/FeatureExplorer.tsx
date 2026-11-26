"use client";
import { useState } from "react";
import Link from "next/link";
import { modules } from "@/data/site";
import { Icon } from "./ui";
export default function FeatureExplorer() {
  const [q, setQ] = useState("");
  const norm = (v: string) =>
    v
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const results = modules.filter((m) =>
    norm([m.name, m.description, ...m.features].join(" ")).includes(
      norm(q.trim()),
    ),
  );
  return (
    <>
      <label className="feature-search">
        Trouvez le module qui répond à votre besoin
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ex. clients, API, paiements…"
        />
      </label>
      <p role="status" className="fineprint">
        {results.length} module{results.length > 1 ? "s" : ""} à explorer
      </p>
      <div className="module-grid">
        {results.map((m) => (
          <Link
            className="module-card"
            href={`/fonctionnalites/${m.slug}`}
            key={m.slug}
          >
            <span className="feature-icon">
              <Icon name={m.icon} />
            </span>
            <span
              className={`module-status ${m.status === "Documenté" ? "" : "is-proposed"}`}
            >
              {m.status}
            </span>
            <h2>{m.name}</h2>
            <p>{m.description}</p>
            <span className="card-link">Voir le détail du module</span>
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>Votre besoin mérite une conversation.</h2>
          <p>
            Aucun module ne correspond à cette recherche. Décrivez-nous votre
            projet.
          </p>
          <Link href="/contact" className="text-link">
            Contacter Daniel
          </Link>
        </div>
      )}
    </>
  );
}
