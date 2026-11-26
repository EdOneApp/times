import type { Metadata } from "next";
import { PageHead, CTA, Icon } from "@/components/ui";
export const metadata: Metadata = {
  title: "Du temps de travail au contexte humain",
  alternates: { canonical: "/a-propos/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="À PROPOS DE TIMETRACKER"
        title="Le suivi du temps. Avec du recul."
        text="TimeTracker est une application web de suivi de présence développée avec Django par Daniel Guedegbe. Ce site Next.js présente le projet et permet d’explorer des interfaces fictives."
      />
      <section className="wrap section detail-grid">
        <h2>
          Voir les heures.
          <br />
          Garder les personnes.
        </h2>
        <div>
          <p>
            La documentation du projet décrit les entreprises, les services, les
            employés, les pointages, les réclamations et les rapports. Le modèle
            de service permet notamment de définir des horaires et une marge de
            retard.
          </p>
          <p>
            Nous avons conçu cette présentation pour rendre le parcours plus
            concret. Ses maquettes ne sont pas des captures du logiciel en
            production. Les plannings avancés et les intégrations sont des
            extensions proposées, clairement signalées.
          </p>
          <p>
            Un suivi utile nécessite des règles comprises, des données protégées
            et des vérifications humaines. Le site public ne recueille aucune
            donnée réelle d’employé.
          </p>
        </div>
      </section>
      <section className="wrap section module-grid">
        {[
          [
            "Clarté",
            "Des horaires, des profils et des repères bien organisés.",
          ],
          [
            "Contexte",
            "Des réclamations qui laissent une place à l’explication.",
          ],
          [
            "Accompagnement",
            "Un cadre défini avec votre équipe avant de déployer.",
          ],
        ].map(([t, d]) => (
          <article className="module-card" key={t}>
            <span className="feature-icon">
              <Icon name="spark" />
            </span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
