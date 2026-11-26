import Link from "next/link";
export function Icon({
  name = "clock",
  className = "",
}: {
  name?: string;
  className?: string;
}) {
  const paths: Record<string, string> = {
    clock: "M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
    calendar: "M5 5h14v16H5zM8 3v4m8-4v4M5 10h14m-10 4h2m2 0h2m-6 3h2",
    message: "M4 4h16v13H9l-5 4V4Zm4 5h8m-8 4h5",
    receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6M9 12h6",
    people:
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m11 10v-2a4 4 0 0 0-3-4m-1-12a4 4 0 0 1 0 8",
    grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    chart: "M3 3v18h18M7 16v-5m5 5V6m5 10V9",
    code: "m8 7-5 5 5 5m8-10 5 5-5 5m-2-14-4 18",
    spark: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z",
    lock: "M5 10h14v11H5zM8 10V7a4 4 0 0 1 8 0v3m-4 5v2",
    check: "m5 12 4 4L19 6",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "m6 6 12 12M6 18 18 6",
  };
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.receipt} />
    </svg>
  );
}
export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link href={href} className={`button ${light ? "button-light" : ""}`}>
      {children}
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function PageHead({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-head wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="lede">{text}</p>
      {children}
    </header>
  );
}
export function CTA() {
  return (
    <section className="closing wrap" data-reveal>
      <div>
        <Eyebrow>VOTRE ÉQUIPE, DANS LE BON TEMPO</Eyebrow>
        <h2>
          Le prochain chapitre
          <br />
          de votre entreprise.
        </h2>
        <p>
          Des horaires à structurer, des présences à suivre : parlons de votre
          quotidien.
        </p>
      </div>
      <Button href="/contact" light>
        Construisons votre solution
      </Button>
    </section>
  );
}
