import type { Metadata } from "next";
import { PageHead } from "@/components/ui";
export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="INFORMATIONS DU SITE"
        title="Mentions légales"
        text="Dernière mise à jour : 26 novembre 2026."
      />
      <article className="wrap article-content">
        <section>
          <h2>Éditeur</h2>
          <p>
            Ce site de présentation TimeTracker est édité par Daniel Guedegbe à
            Abidjan, Côte d’Ivoire. Contact : danielguedegbe10027@gmail.com ·
            +225 07 48 73 33 65. Aucune immatriculation commerciale non fournie
            n’est revendiquée ici.
          </p>
        </section>
        <section>
          <h2>Hébergement</h2>
          <p>
            Le site statique est hébergé sur GitHub Pages, service de GitHub,
            Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.
            Documentation : https://docs.github.com/fr/pages.
          </p>
        </section>
        <section>
          <h2>Présentation du projet</h2>
          <p>
            Le site décrit le socle de TimeTracker et signale les extensions
            proposées. Les maquettes et les données sont fictives. Les fonctions
            disponibles et les conditions de service sont confirmées dans un
            accord distinct.
          </p>
        </section>
        <section>
          <h2>Contenus et interfaces</h2>
          <p>
            Les interfaces de ce site sont des compositions originales de
            présentation. Elles ne montrent pas de données réelles d’employés et
            ne reproduisent pas un espace de production.
          </p>
        </section>
      </article>
    </>
  );
}
