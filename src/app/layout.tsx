import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav, Reveals } from "@/components/Shell";
import Footer from "@/components/Footer";
import "./globals.css";
const font = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://times.myoctogone.com"),
  title: {
    default: "TimeTracker — Chaque heure. Chaque personne.",
    template: "%s · TimeTracker",
  },
  description:
    "TimeTracker : présences, horaires, employés, entreprises, réclamations et rapports. Découvrez une application de suivi du temps de travail pensée pour vos équipes.",
  openGraph: {
    type: "website",
    locale: "fr_CI",
    siteName: "TimeTracker",
    images: [
      {
        url: "/images/og-times.png",
        width: 1200,
        height: 630,
        alt: "TimeTracker — Chaque heure. Chaque personne.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={font.variable}>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveals />
      </body>
    </html>
  );
}
