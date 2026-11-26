import Link from "next/link";
import { contact } from "@/data/site";
import { Icon } from "./ui";
export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-top">
        <div>
          <Link className="logo" href="/">
            <span>
              <Icon />
            </span>
            time<span className="logo-suffix">tracker.</span>
          </Link>
          <p>
            Le temps de travail, mieux organisé.
            <br />
            Pensé pour les équipes et les entreprises.
          </p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div>
          <h3>La plateforme</h3>
          <Link href="/fonctionnalites">Fonctionnalités</Link>
          <Link href="/solutions">Votre entreprise</Link>
          <Link href="/demo">Démonstration</Link>
          <Link href="/tarifs">Accompagnement</Link>
        </div>
        <div>
          <h3>Faisons connaissance</h3>
          <Link href="/a-propos">À propos</Link>
          <Link href="/ressources">Guides & ressources</Link>
          <Link href="/contact">Contact</Link>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} TimeTracker · Une solution indépendante.
        </p>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/conditions-utilisation">Conditions</Link>
        </div>
      </div>
      <p className="wrap footer-disclaimer">
        Site de présentation de TimeTracker. Les maquettes et les données de
        démonstration sont fictives. La démo ne constitue ni un outil de paie ni
        un système de suivi réel.
      </p>
    </footer>
  );
}
