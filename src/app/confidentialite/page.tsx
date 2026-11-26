import type { Metadata } from "next";
import { PageHead } from "@/components/ui";
export const metadata: Metadata = {
  title: "Confidentialité",
  alternates: { canonical: "/confidentialite/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="INFORMATIONS DU SITE"
        title="Confidentialité"
        text="Dernière mise à jour : 26 novembre 2026."
      />
      <article className="wrap article-content">
        <section>
          <h2>Démonstration publique</h2>
          <p>
            Les horaires saisis dans le simulateur restent dans la mémoire de la
            page. Ils ne sont pas enregistrés par notre application ni envoyés à
            un serveur métier. Le fichier CSV est créé localement à votre
            demande.
          </p>
        </section>
        <section>
          <h2>Données des employés</h2>
          <p>
            N’utilisez jamais la démonstration pour saisir des noms d’employés
            réels, des justificatifs ou des informations confidentielles. Un
            déploiement opérationnel demande un cadrage distinct des accès, de
            la conservation et des responsabilités.
          </p>
        </section>
        <section>
          <h2>Contact et services tiers</h2>
          <p>
            Le formulaire prépare un message WhatsApp. Il n’envoie rien
            automatiquement. Si vous ouvrez le lien, les informations sont
            communiquées au service tiers ; vous pouvez relire le message avant
            de l’envoyer. Votre messagerie applique aussi ses propres règles.
          </p>
        </section>
        <section>
          <h2>Mesure d’audience et droits</h2>
          <p>
            Aucun pixel publicitaire, outil d’analyse ou cookie applicatif n’est
            installé. Les polices sont locales. GitHub Pages peut traiter des
            journaux techniques. Toute question sur un échange avec Daniel peut
            être adressée à danielguedegbe10027@gmail.com.
          </p>
        </section>
      </article>
    </>
  );
}
