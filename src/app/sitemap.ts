import type { MetadataRoute } from "next";
import { modules, solutions, resources } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "fonctionnalites",
    "solutions",
    "demo",
    "tarifs",
    "contact",
    "a-propos",
    "ressources",
    "mentions-legales",
    "confidentialite",
    "conditions-utilisation",
    ...modules.map((m) => "fonctionnalites/" + m.slug),
    ...solutions.map((s) => "solutions/" + s.slug),
    ...resources.map((a) => "ressources/" + a.slug),
  ];
  return routes.map((p) => ({
    url: "https://times.myoctogone.com/" + (p ? p + "/" : ""),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p ? 0.7 : 1,
  }));
}
