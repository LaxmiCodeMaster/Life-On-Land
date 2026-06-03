"use client";

import { MapContainer, TileLayer, Circle, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function EcosystemMap() {
  return (
    <MapContainer center={[27.7, 85.3]} zoom={7} className="h-[560px] w-full rounded-2xl">
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
      </LayersControl>

      <Circle center={[27.8, 85.2]} radius={22000} pathOptions={{ color: "#22c55e" }} />
      <Circle center={[27.7, 85.35]} radius={12000} pathOptions={{ color: "#3b82f6" }} />
      <Circle center={[27.65, 85.4]} radius={10000} pathOptions={{ color: "#facc15" }} />
      <Circle center={[27.83, 85.45]} radius={9000} pathOptions={{ color: "#ef4444" }} />
      <Circle center={[27.72, 85.18]} radius={13000} pathOptions={{ color: "#f97316" }} />
    </MapContainer>
  );
}
