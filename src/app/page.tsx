import type { Metadata } from "next";
import Home from "@/components/Home";
export default function Page() {
  return <Home />;
}

export const metadata: Metadata = { alternates: { canonical: "/" } };
