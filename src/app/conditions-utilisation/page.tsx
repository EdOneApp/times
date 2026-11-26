import type { Metadata } from "next";
import { PageHead } from "@/components/ui";
export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  alternates: { canonical: "/conditions-utilisation/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="INFORMATIONS DU SITE"
        title="Conditions d’utilisation"
        text="Dernière mise à jour : 26 novembre 2026."
      />
      <article className="wrap article-content">
        <section>
          <h2>Objet</h2>
          <p>
            Ce site présente TimeTracker et des parcours de démonstration. Il ne
            crée aucun compte de production, abonnement ou contrat de service.
          </p>
        </section>
        <section>
          <h2>Limites de la démonstration</h2>
          <p>
            Les calculs illustrent des durées sur une même journée. Ils ne
            déterminent ni salaire, ni sanction, ni obligation réglementaire.
            Les décisions et contrôles restent du ressort des responsables
            compétents.
          </p>
        </section>
        <section>
          <h2>Périmètre des fonctions</h2>
          <p>
            Les modules marqués Documenté sont décrits dans les informations
            fournies par l’auteur. Les extensions proposées nécessitent un
            cadrage et une confirmation. Le déploiement effectif fait l’objet
            d’un accord distinct.
          </p>
        </section>
        <section>
          <h2>Usage du site</h2>
          <p>
            N’entrez aucune donnée personnelle réelle d’employé dans les
            exemples. Les liens externes et outils tiers sont soumis à leurs
            propres conditions de fonctionnement.
          </p>
        </section>
      </article>
    </>
  );
}
