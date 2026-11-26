"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./ui";
const links = [
  ["La plateforme", "/fonctionnalites"],
  ["Pour votre entreprise", "/solutions"],
  ["Accompagnement", "/tarifs"],
  ["Ressources", "/ressources"],
];
export function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menu = useRef<HTMLElement>(null),
    toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const items = () => menu.current?.querySelectorAll<HTMLElement>("a,button");
    items()?.[0]?.focus();
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      const els = items();
      if (e.key === "Tab" && els?.length) {
        if (e.shiftKey && document.activeElement === els[0]) {
          e.preventDefault();
          els[els.length - 1].focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === els[els.length - 1]
        ) {
          e.preventDefault();
          els[0].focus();
        }
      }
    }
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <header className="nav">
        <Link className="logo" href="/" aria-label="TimeTracker, accueil">
          <span>
            <Icon />
          </span>
          time<span className="logo-suffix">tracker.</span>
        </Link>
        <nav aria-label="Navigation principale">
          {links.map(([l, u]) => (
            <Link
              key={u}
              href={u}
              aria-current={path.startsWith(u) ? "page" : undefined}
            >
              {l}
            </Link>
          ))}
        </nav>
        <Link href="/demo" className="nav-demo">
          Explorer la démo
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" />
        </button>
      </header>
      {open && (
        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Menu mobile"
          role="dialog"
          aria-modal="true"
          ref={menu}
        >
          <button
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
            aria-label="Fermer le menu"
          >
            <Icon name="close" />
          </button>
          {[
            ...links,
            ["Explorer la démo", "/demo"],
            ["Parlons de votre projet", "/contact"],
          ].map(([l, u]) => (
            <Link key={u} href={u} onClick={() => setOpen(false)}>
              {l}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
export function Reveals() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((x) => observer.observe(x));
    return () => observer.disconnect();
  });
  return null;
}
