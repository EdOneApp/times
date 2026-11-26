import type { Metadata } from "next";
import FeatureExplorer from "@/components/FeatureExplorer";
import { CTA, PageHead } from "@/components/ui";
export const metadata: Metadata = {
  title: "Une plateforme, tout votre suivi",
  alternates: { canonical: "/fonctionnalites/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="LA PLATEFORME"
        title="Toutes les pièces. Une même vision."
        text="Découvrez les fonctions décrites dans le projet TimeTracker et les extensions proposées. Leur périmètre de déploiement est confirmé avec vous."
      />
      <section className="wrap section">
        <FeatureExplorer />
      </section>
      <CTA />
    </>
  );
}
