import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/site";
import { PageHead, CTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Une solution pour votre organisation",
  alternates: { canonical: "/solutions/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="POUR VOTRE ENTREPRISE"
        title="Votre réalité. Notre point de départ."
        text="Une petite équipe, une équipe RH ou plusieurs établissements : votre environnement de travail mérite un parcours adapté."
      />
      <section className="wrap section solution-grid">
        {solutions.map((s, i) => (
          <Link
            className={`solution-card solution-${i}`}
            href={`/solutions/${s.slug}`}
            key={s.slug}
          >
            <span className="solution-art" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <h2>{s.name}</h2>
            <p>{s.text}</p>
            <span className="card-link">Explorer cette solution</span>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
