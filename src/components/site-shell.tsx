"use client";

import Link from "next/link";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useAlertStore } from "@/lib/store";

const links = [
  ["/", "Home"],
  ["/encyclopedia", "Encyclopedia"],
  ["/tracker", "Endangered Tracker"],
  ["/map", "Ecosystem Map"],
  ["/gps", "GPS Dashboard"],
  ["/report", "Report Incident"],
  ["/assistant", "EcoCopilot AI"],
  ["/auth", "Account"],
  ["/donate", "Donate"],
  ["/learning", "Learning Hub"]
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [acknowledged, setAcknowledged] = useState(false);
  const { geofenceAlert, visitorAlert } = useAlertStore();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3">
          <Link href="/" className="text-lg font-semibold tracking-wide text-habitat">
            Life on Land
          </Link>
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {!acknowledged && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="glass w-full max-w-xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Safety Rules & Regulations</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Do not feed animals.</li>
              <li>• Do not disturb wildlife.</li>
              <li>• Stay on designated trails.</li>
              <li>• Respect conservation areas.</li>
              <li>• Follow park guidelines.</li>
            </ul>
            <button
              onClick={() => setAcknowledged(true)}
              className="mt-6 rounded-xl bg-habitat px-4 py-2 font-medium text-slate-950"
            >
              I Understand & Continue
            </button>
          </div>
        </div>
      )}

      {(geofenceAlert || visitorAlert) && (
        <div className="fixed right-4 top-20 z-50 space-y-2">
          {geofenceAlert && <p className="rounded-xl border border-danger/50 bg-danger/20 px-4 py-3">{geofenceAlert}</p>}
          {visitorAlert && <p className="rounded-xl border border-caution/50 bg-caution/20 px-4 py-3 text-black">{visitorAlert}</p>}
        </div>
      )}

      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>

      <footer className="border-t border-white/10 bg-black/20 px-4 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-4">
          {[
            "Terms and Conditions",
            "Privacy Policy",
            "Help and Support",
            "About Us",
            "Features",
            "EcoCopilot AI",
            "Security",
            "Team",
            "Resources",
            "Interactive Map",
            "Ecosystem",
            "System Status",
            "Blog",
            "Social Impact",
            "Contact Information",
            "Social Media Links"
          ].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </footer>
      <Toaster position="top-right" />
    </div>
  );
}
