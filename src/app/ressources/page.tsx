import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/data/site";
import { PageHead, Icon, CTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Guides & ressources TimeTracker",
  alternates: { canonical: "/ressources/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="GUIDES & RESSOURCES"
        title="Les bons repères. Pour les bonnes décisions."
        text="Des idées concrètes pour organiser votre suivi de présence et préparer les échanges avec vos équipes."
      />
      <section className="wrap section resource-grid">
        {resources.map((a, i) => (
          <Link
            className="resource-card"
            href={`/ressources/${a.slug}`}
            key={a.slug}
          >
            <div className={`resource-art art-${i}`}>
              <Icon name={i === 0 ? "receipt" : i === 1 ? "code" : "grid"} />
            </div>
            <p className="eyebrow">{a.tag}</p>
            <h2>{a.title}</h2>
            <p>{a.intro}</p>
            <span className="card-link">Lire le guide</span>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
