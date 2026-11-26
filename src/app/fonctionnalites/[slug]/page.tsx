import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { modules } from "@/data/site";
import { Button, CTA, Icon, PageHead } from "@/components/ui";
import Dashboard from "@/components/Dashboard";
export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = modules.find((x) => x.slug === slug);
  return {
    title: m?.name,
    description: m?.description,
    alternates: { canonical: `/fonctionnalites/${slug}/` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = modules.find((x) => x.slug === slug);
  if (!m) notFound();
  return (
    <>
      <PageHead
        eyebrow="LES MODULES TIMETRACKER"
        title={m.name}
        text={m.description}
      >
        <Button href="/contact">Parlons de ce module</Button>
      </PageHead>
      <section className="wrap detail-grid section">
        <div>
          <span className="feature-icon">
            <Icon name={m.icon} />
          </span>
          <span
            className={`module-status ${m.status === "Documenté" ? "" : "is-proposed"}`}
          >
            {m.status}
          </span>
          <h2>{m.short}</h2>
          <p>
            Le bon outil s’adapte à votre façon de travailler. Le périmètre de
            chaque fonction est confirmé selon votre organisation.
          </p>
        </div>
        <ul className="check-list">
          {m.features.map((f) => (
            <li key={f}>
              <Icon name="check" />
              {f}
            </li>
          ))}
        </ul>
      </section>
      <section className="wrap demo-dashboard-section">
        <Dashboard />
        <p className="fineprint">
          Maquette interactive avec données fictives. Les extensions proposées
          font l’objet d’un cadrage distinct.
        </p>
      </section>
      <CTA />
    </>
  );
}
