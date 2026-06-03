import { EcosystemMapLoader } from "@/components/ecosystem-map-loader";

export default function MapPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Interactive Ecosystem Map</h1>
      <p className="mt-2 text-slate-300">
        Forest areas (green), water ecosystems (blue), visitor zones (yellow), danger zones (red), endangered regions
        (orange).
      </p>
      <div className="mt-6">
        <EcosystemMapLoader />
      </div>
    </div>
  );
}
