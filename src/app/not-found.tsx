import { Button, PageHead } from "@/components/ui";
export default function NotFound() {
  return (
    <PageHead
      eyebrow="PAGE INTROUVABLE / 404"
      title="Cette page a pris un autre chemin."
      text="Revenons à l’essentiel : votre plateforme, vos équipes et votre prochain projet."
    >
      <Button href="/">Revenir à l’accueil</Button>
    </PageHead>
  );
}
