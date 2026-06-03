"use client";

import dynamic from "next/dynamic";

export const EcosystemMapLoader = dynamic(
  () => import("@/components/ecosystem-map").then((m) => m.EcosystemMap),
  { ssr: false }
);
