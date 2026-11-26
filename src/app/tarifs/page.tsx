import type { Metadata } from "next";
import { Button, CTA, Icon, PageHead } from "@/components/ui";
export const metadata: Metadata = {
  title: "Un accompagnement adapté à votre équipe",
  alternates: { canonical: "/tarifs/" },
};
const offers = [
  {
    name: "Équipe",
    text: "Pour structurer le suivi d’un premier périmètre.",
    items: [
      "Entreprises, services et profils",
      "Horaires et suivi de présence",
      "Prise en main et premiers rapports",
    ],
  },
  {
    name: "Organisation",
    text: "Pour plusieurs services ou entreprises.",
    items: [
      "Cadrage des périmètres de suivi",
      "Réclamations et reporting",
      "Accompagnement des responsables",
    ],
  },
  {
    name: "Évolution",
    text: "Pour étudier des besoins complémentaires.",
    items: [
      "Plannings et circuits à concevoir",
      "Exports ou intégrations à étudier",
      "Développements et tests sur mesure",
    ],
  },
];
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="ACCOMPAGNEMENT & TARIFS"
        title="Le bon cadre. Pour votre équipe."
        text="Vos entreprises, vos services et votre organisation déterminent le périmètre. Aucun tarif inventé : une proposition claire, construite après notre échange."
      />
      <section className="wrap section pricing-grid">
        {offers.map((o, i) => (
          <article key={o.name} className={i === 1 ? "pricing-featured" : ""}>
            <p className="eyebrow">
              {i === 2 ? "EXTENSIONS PROPOSÉES" : "SELON VOTRE ORGANISATION"}
            </p>
            <h2>{o.name}</h2>
            <p>{o.text}</p>
            <strong>Sur devis</strong>
            <span>Disponibilité et conditions confirmées ensemble.</span>
            <ul>
              {o.items.map((f) => (
                <li key={f}>
                  <Icon name="check" />
                  {f}
                </li>
              ))}
            </ul>
            <Button href="/contact" light={i === 1}>
              Parlons de votre besoin
            </Button>
          </article>
        ))}
      </section>
      <section className="wrap section pricing-note">
        <h2>
          Des attentes claires.
          <br />
          Dès le premier échange.
        </h2>
        <p>
          La proposition précise le paramétrage, l’hébergement, les fonctions
          disponibles, l’accompagnement, le support et les éventuels
          développements. Les règles d’utilisation des données et les
          responsabilités sont définies avant tout déploiement réel.
        </p>
      </section>
      <CTA />
    </>
  );
}
