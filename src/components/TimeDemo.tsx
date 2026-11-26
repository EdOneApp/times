"use client";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { calculateDay, formatDuration, type DayInput } from "@/lib/time";
import { Icon } from "./ui";
export default function TimeDemo() {
  const [input, setInput] = useState<DayInput>({
    arrival: "08:12",
    departure: "17:00",
    expectedStart: "08:00",
    expectedEnd: "17:00",
    pause: 60,
    margin: 10,
  });
  let result: ReturnType<typeof calculateDay> | null = null;
  let error = "";
  try {
    result = calculateDay(input);
  } catch (e) {
    error = e instanceof Error ? e.message : "Vérifiez les horaires.";
  }
  function change(key: keyof DayInput, v: string) {
    setInput({
      ...input,
      [key]:
        key === "pause" || key === "margin"
          ? Math.max(0, Math.min(1440, Number(v) || 0))
          : v,
    });
  }
  function download() {
    if (!result) return;
    const content =
      "\uFEFF" +
      [
        ["Démonstration TimeTracker — données fictives"],
        [
          "Arrivée",
          "Départ",
          "Pause (min)",
          "Temps effectif",
          "Écart arrivée (min)",
          "Départ anticipé (min)",
          "Dépassement durée (min)",
        ],
        [
          input.arrival,
          input.departure,
          input.pause,
          formatDuration(result.effective),
          result.late,
          result.early,
          result.extra,
        ],
        ["Exemple sans valeur de paie — aucune donnée réelle"],
      ]
        .map((row) => row.join(";"))
        .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "timetracker-exemple.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <div className="time-demo-grid">
        <section className="time-demo-editor">
          <span className="feature-icon">
            <Icon name="clock" />
          </span>
          <h2>Une journée. Vos paramètres.</h2>
          <p>Changez les horaires pour voir les durées évoluer.</p>
          <div className="time-fields">
            {[
              ["expectedStart", "Début attendu"],
              ["expectedEnd", "Fin attendue"],
              ["arrival", "Arrivée observée"],
              ["departure", "Départ observé"],
            ].map(([key, label]) => (
              <label key={key}>
                {label}
                <input
                  type="time"
                  value={String(input[key as keyof DayInput])}
                  onChange={(e) =>
                    change(key as keyof DayInput, e.target.value)
                  }
                  required
                />
              </label>
            ))}
            <label>
              Pause déduite (minutes)
              <input
                type="number"
                min="0"
                max="1440"
                value={input.pause}
                onChange={(e) => change("pause", e.target.value)}
              />
            </label>
            <label>
              Marge de retard (minutes)
              <input
                type="number"
                min="0"
                max="1440"
                value={input.margin}
                onChange={(e) => change("margin", e.target.value)}
              />
            </label>
          </div>
          <p className="fineprint">
            Exemple sur une même journée, avec la même pause pour la durée
            attendue et la durée observée. La marge change le signalement du
            retard, jamais les minutes effectivement calculées.
          </p>
        </section>
        <section className="time-demo-result" aria-live="polite">
          <span className="eyebrow">VOTRE RELEVÉ ILLUSTRATIF</span>
          {result ? (
            <>
              <h2>{formatDuration(result.effective)}</h2>
              <p>de temps effectif dans cet exemple</p>
              <dl>
                {[
                  ["Présence totale", formatDuration(result.gross)],
                  ["Durée attendue nette", formatDuration(result.expected)],
                  ["Écart à l’arrivée", formatDuration(result.late)],
                  ["Départ anticipé", formatDuration(result.early)],
                  [
                    "Dépassement de la durée attendue",
                    formatDuration(result.extra),
                  ],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <span
                className={`demo-result-status ${result.lateFlag ? "needs-context" : ""}`}
              >
                {result.lateFlag
                  ? "Arrivée à vérifier avec son contexte"
                  : "Arrivée dans la marge paramétrée"}
              </span>
              <button className="button button-light" onClick={download}>
                Télécharger l’exemple CSV
              </button>
            </>
          ) : (
            <div className="demo-error" role="alert">
              <h2>Vérifions les horaires.</h2>
              <p>{error}</p>
            </div>
          )}
          <p className="fineprint">
            Aucun pointage enregistré. Aucun calcul de paie ni décision RH. Les
            heures supplémentaires à rémunérer nécessitent vos règles et une
            vérification humaine.
          </p>
        </section>
      </div>
      <section className="demo-team-section">
        <h2>Et côté équipe ?</h2>
        <p className="lede">
          Changez de vue, filtrez les présences, explorez une réclamation
          fictive.
        </p>
        <Dashboard />
      </section>
    </>
  );
}
