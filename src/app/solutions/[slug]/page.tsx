import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/data/site";
import { PageHead, CTA, Icon, Button } from "@/components/ui";
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  return {
    title: s?.name,
    description: s?.text,
    alternates: { canonical: `/solutions/${slug}/` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHead eyebrow={s.name} title={s.headline} text={s.text} />
      <section className="wrap section detail-grid">
        <div>
          <h2>
            Un cadre clair.
            <br />
            Pour avancer ensemble.
          </h2>
          <p>
            Nous commençons par vos documents, vos volumes et les rôles de
            chacun. Puis nous précisons un périmètre réaliste et une mise en
            place progressive.
          </p>
          <Button href="/contact">Définir mon projet</Button>
        </div>
        <ul className="check-list">
          {s.needs.map((n) => (
            <li key={n}>
              <Icon name="check" />
              {n}
            </li>
          ))}
        </ul>
      </section>
      <CTA />
    </>
  );
}
