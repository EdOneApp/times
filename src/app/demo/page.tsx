import type { Metadata } from "next";
import TimeDemo from "@/components/TimeDemo";
import { PageHead, CTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Explorez une journée de démonstration",
  alternates: { canonical: "/demo/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="LA DÉMONSTRATION INTERACTIVE"
        title="Quelques heures. Beaucoup plus de clarté."
        text="Modifiez une journée fictive, retrouvez les durées et explorez les vues d’équipe. Tout reste dans votre navigateur : aucun employé suivi, aucun pointage réel."
      />
      <section className="wrap demo-section">
        <TimeDemo />
      </section>
      <CTA />
    </>
  );
}
