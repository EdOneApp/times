import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/site";
import { PageHead } from "@/components/ui";
export const metadata: Metadata = {
  title: "Parlons de votre entreprise",
  alternates: { canonical: "/contact/" },
};
export default function Page() {
  return (
    <>
      <PageHead
        eyebrow="LE DÉBUT D’UNE BONNE ORGANISATION"
        title="Faisons connaissance."
        text="Une présentation, une question ou un projet d’intégration ? Racontez-nous ce que vous souhaitez simplifier."
      />
      <section className="wrap section contact-grid">
        <aside>
          <h2>
            Une personne.
            <br />
            Un vrai échange.
          </h2>
          <p>
            {contact.name}
            <br />
            Conception & accompagnement
          </p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            {contact.phone}
          </a>
          <p>
            Abidjan, Côte d’Ivoire
            <br />
            Échange à distance possible.
          </p>
          <div className="contact-aside-note">
            <h3>Avant notre échange</h3>
            <p>
              Vos outils actuels, le nombre d’entreprises et de services et les
              tâches qui vous prennent du temps : c’est un très bon point de
              départ.
            </p>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
