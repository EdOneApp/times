import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources } from "@/data/site";
import { PageHead, CTA } from "@/components/ui";
export function generateStaticParams() {
  return resources.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = resources.find((x) => x.slug === slug);
  return {
    title: a?.title,
    description: a?.intro,
    alternates: { canonical: `/ressources/${slug}/` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = resources.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <PageHead eyebrow={a.tag} title={a.title} text={a.intro} />
      <article className="wrap article-content">
        {a.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </section>
        ))}
        <aside>
          <h3>Un repère pour votre projet.</h3>
          <p>
            Ces conseils d’organisation ne remplacent pas votre politique
            interne, les règles applicables ou l’avis des personnes compétentes.
            Les fonctions documentées sont identifiées à partir de la
            documentation fournie par l’auteur de TimeTracker.
          </p>
        </aside>
      </article>
      <CTA />
    </>
  );
}
