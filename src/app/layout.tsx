import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Life on Land | Wildlife Conservation Platform",
  description:
    "A professional conservation platform inspired by SDG 15 for wildlife protection, ecosystem monitoring, and public education.",
  keywords: [
    "wildlife conservation",
    "life on land",
    "endangered animals",
    "ecosystem protection",
    "sustainable development goal 15"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
