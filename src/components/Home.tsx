import Link from "next/link";
import Dashboard from "./Dashboard";
import { Button, CTA, Eyebrow, Icon } from "./ui";
import { modules, solutions, resources } from "@/data/site";
export default function Home() {
  return (
    <>
      <section className="hero time-hero">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow>LE TEMPS DE TRAVAIL, DU CÔTÉ DES ÉQUIPES.</Eyebrow>
            <h1>
              Chaque heure.
              <br />
              <em>Chaque personne.</em>
            </h1>
            <p>
              Présences, horaires et réclamations : un même espace pour suivre
              les journées de vos équipes, avec les bonnes informations et le
              bon contexte.
            </p>
            <div className="hero-actions">
              <Button href="/demo">Explorer TimeTracker</Button>
              <Link className="text-link" href="/contact">
                Parlons de votre équipe
              </Link>
            </div>
            <div className="hero-notes">
              <span>
                <Icon name="check" /> Entreprises & services
              </span>
              <span>
                <Icon name="check" /> Présences & horaires
              </span>
              <span>
                <Icon name="check" /> Rapports & réclamations
              </span>
            </div>
          </div>
          <div className="hero-product">
            <div className="product-caption">
              UNE JOURNÉE PLUS LISIBLE COMMENCE ICI.
            </div>
            <Dashboard compact />
            <div className="time-floating" aria-hidden="true">
              <span>
                <Icon name="clock" /> Votre journée, au clair.
              </span>
              <strong>
                08:00 <i>—</i> 17:00
              </strong>
              <div className="time-progress">
                <i />
              </div>
              <p>Présence · Pause · Temps effectif</p>
              <small>APERÇU ILLUSTRATIF</small>
            </div>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <span>DES DONNÉES UTILES. DES ÉQUIPES QUI RESTENT AU CENTRE.</span>
          <span>Le suivi quotidien, avec plus de recul.</span>
        </div>
      </section>
      <section className="intro-section wrap" data-reveal>
        <Eyebrow>LE TEMPS NE RACONTE PAS TOUT. LE CONTEXTE, SI.</Eyebrow>
        <h2>
          Des journées chargées.
          <br />
          <em>Un suivi plus léger.</em>
        </h2>
        <div className="intro-columns">
          <p>
            Des arrivées à retrouver, un horaire de service à vérifier, un oubli
            à expliquer. Quand le suivi se disperse, chacun perd du temps à
            reconstruire la journée.
          </p>
          <p>
            TimeTracker réunit les entreprises, les services, les employés et
            les données de présence. Pour voir plus clair, préparer vos rapports
            et laisser la place aux explications.
          </p>
        </div>
      </section>
      <section className="module-section">
        <div className="wrap">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>UN SOCLE CONCRET. UNE VISION QUI GRANDIT.</Eyebrow>
              <h2>
                Ce qu’il faut suivre.
                <br />
                <em>Et ce qu’il faut comprendre.</em>
              </h2>
            </div>
            <Link className="text-link" href="/fonctionnalites">
              Tous les modules
            </Link>
          </div>
          <div className="module-grid">
            {modules.slice(0, 6).map((m) => (
              <Link
                className="module-card"
                key={m.slug}
                href={`/fonctionnalites/${m.slug}`}
                data-reveal
              >
                <span className="feature-icon">
                  <Icon name={m.icon} />
                </span>
                <h3>{m.name}</h3>
                <p>{m.short}</p>
                <span className="card-link">Découvrir ce module</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="workflow wrap" data-reveal>
        <div>
          <Eyebrow>UNE JOURNÉE. UN PARCOURS COMMUN.</Eyebrow>
          <h2>
            Du premier horaire
            <br />
            <em>au dernier repère.</em>
          </h2>
          <p>
            Un cadre de suivi utile ne s’arrête pas aux heures. Il relie aussi
            les personnes, les règles et les retours de terrain.
          </p>
          <Button href="/demo">Essayer une journée de démonstration</Button>
        </div>
        <div className="workflow-list">
          {[
            [
              "Structurer",
              "Les entreprises, les services et les profils au bon endroit.",
              "grid",
            ],
            [
              "Suivre",
              "Les arrivées, les départs et les heures effectuées.",
              "clock",
            ],
            [
              "Écouter",
              "Les réclamations et leur contexte, avant toute conclusion.",
              "message",
            ],
            [
              "Présenter",
              "Des rapports pour préparer vos échanges internes.",
              "chart",
            ],
          ].map(([t, d, i]) => (
            <article key={t}>
              <span className="workflow-dot">
                <Icon name={i} />
              </span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="dark-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>DES MÉTIERS DIFFÉRENTS. UN BESOIN DE CLARTÉ.</Eyebrow>
              <h2>
                À votre échelle.
                <br />
                <em>Au rythme de vos équipes.</em>
              </h2>
            </div>
          </div>
          <div className="solution-grid">
            {solutions.map((s, i) => (
              <Link
                className={`solution-card solution-${i}`}
                key={s.slug}
                href={`/solutions/${s.slug}`}
              >
                <span className="solution-art" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <h3>{s.name}</h3>
                <p>{s.headline}</p>
                <span className="card-link">Explorer ce parcours</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="demo-invitation wrap" data-reveal>
        <div className="schedule-visual" aria-hidden="true">
          <span>UNE JOURNÉE D’EXEMPLE</span>
          <div className="schedule-hours">
            <b>08:00</b>
            <b>12:00</b>
            <b>13:00</b>
            <b>17:00</b>
          </div>
          <div className="schedule-track">
            <span>Travail</span>
            <i>Pause</i>
            <span>Travail</span>
          </div>
          <div className="schedule-result">
            <span>Temps effectif illustratif</span>
            <strong>8 h 00</strong>
          </div>
          <small>Valeurs fictives · Aucun calcul de paie</small>
        </div>
        <div>
          <Eyebrow>LE PRODUIT, EN QUELQUES GESTES.</Eyebrow>
          <h2>
            Faites le tour.
            <br />
            <em>Prenez vos repères.</em>
          </h2>
          <p>
            Modifiez les horaires et la pause. Explorez les présences d’une
            équipe fictive, filtrez les statuts et exportez un exemple de
            relevé.
          </p>
          <Button href="/demo">Ouvrir la démonstration</Button>
        </div>
      </section>
      <section className="scope-band wrap">
        <Icon name="spark" />
        <div>
          <h3>Une base documentée. Des extensions à construire.</h3>
          <p>
            Présences, entreprises, services, employés, réclamations et rapports
            sont décrits dans le projet. Les plannings avancés et les
            intégrations constituent des extensions proposées, à confirmer avec
            vous.
          </p>
        </div>
      </section>
      <section className="resources-home wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>LES REPÈRES QUI FONT LA DIFFÉRENCE</Eyebrow>
            <h2>
              Mieux organiser.
              <br />
              <em>Mieux se comprendre.</em>
            </h2>
          </div>
          <Link className="text-link" href="/ressources">
            Tous les guides
          </Link>
        </div>
        <div className="resource-grid">
          {resources.map((a, i) => (
            <Link
              className="resource-card"
              key={a.slug}
              href={`/ressources/${a.slug}`}
            >
              <div className={`resource-art art-${i}`}>
                <Icon name={i === 0 ? "grid" : i === 1 ? "clock" : "message"} />
              </div>
              <Eyebrow>{a.tag}</Eyebrow>
              <h3>{a.title}</h3>
              <p>{a.intro}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="faq wrap" data-reveal>
        <div>
          <Eyebrow>ON PREND LE TEMPS DE RÉPONDRE.</Eyebrow>
          <h2>
            Les bonnes
            <br />
            <em>questions.</em>
          </h2>
        </div>
        <div>
          {[
            [
              "Que fait TimeTracker aujourd’hui ?",
              "La documentation décrit une application Django pour gérer les entreprises, services, employés, présences, réclamations et rapports. Le périmètre de déploiement est confirmé avec vous.",
            ],
            [
              "La démo suit-elle de vrais employés ?",
              "Non. Les profils et les données sont fictifs. Le simulateur ne transmet rien au système de votre entreprise et ne crée aucun pointage réel.",
            ],
            [
              "Est-ce un logiciel de paie ?",
              "La démo calcule seulement des durées illustratives. Les règles de paie, les obligations locales et les décisions RH restent à définir et à vérifier avec les personnes compétentes.",
            ],
            [
              "Peut-on ajouter des plannings ou des intégrations ?",
              "Oui, ces besoins peuvent être étudiés. Ils sont présentés comme des extensions proposées et ne sont pas annoncés comme déjà disponibles.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
