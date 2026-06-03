"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { IncidentType } from "@/types";

const incidentTypes: IncidentType[] = [
  "Illegal hunting",
  "Injured animal",
  "Forest fire",
  "Habitat destruction",
  "Human-wildlife conflict"
];

export default function ReportPage() {
  const [type, setType] = useState<IncidentType>("Illegal hunting");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
      () => toast.error("Unable to fetch GPS location")
    );
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Incident submitted to conservation response queue.");
    setDescription("");
    setContact("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Report Wildlife Incidents</h1>
      <p className="mt-2 text-slate-300">Submit verified reports with image evidence and GPS coordinates.</p>

      <form onSubmit={submit} className="glass mt-6 space-y-4 rounded-2xl p-6">
        <label className="block space-y-1">
          <span className="text-sm">Incident Type</span>
          <select value={type} onChange={(e) => setType(e.target.value as IncidentType)} className="w-full rounded-lg bg-black/20 p-3">
            {incidentTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block space-y-1">
          <span className="text-sm">Upload Photo</span>
          <input type="file" accept="image/*" className="w-full rounded-lg bg-black/20 p-3" />
        </label>

        <label className="block space-y-1">
          <span className="text-sm">GPS Location</span>
          <div className="flex gap-2">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Latitude, Longitude"
              className="w-full rounded-lg bg-black/20 p-3"
            />
            <button type="button" onClick={detectLocation} className="rounded-lg bg-water px-4 py-2 text-white">
              Detect
            </button>
          </div>
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Incident description"
          className="h-28 w-full rounded-lg bg-black/20 p-3"
        />
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact information"
          className="w-full rounded-lg bg-black/20 p-3"
        />

        <button className="rounded-xl bg-endangered px-5 py-3 font-semibold">Submit Report</button>
      </form>
    </div>
  );
}
