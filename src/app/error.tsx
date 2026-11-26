"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="wrap page-head">
      <p className="eyebrow">UNE INTERRUPTION PASSAGÈRE</p>
      <h1>Reprenons sereinement.</h1>
      <p className="lede">Cette page n’a pas pu s’afficher correctement.</p>
      <button className="button" onClick={reset}>
        Réessayer
      </button>
      <Link className="text-link" href="/">
        Revenir à l’accueil
      </Link>
    </section>
  );
}
