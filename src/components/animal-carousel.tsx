"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { animals } from "@/data/mock-data";
import { riskClasses } from "@/lib/utils";

export function AnimalCarousel() {
  const [selected, setSelected] = useState<(typeof animals)[number] | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Wildlife Gallery</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal) => (
          <motion.button
            key={animal.id}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(animal)}
            className="glass overflow-hidden rounded-2xl text-left"
          >
            <Image src={animal.image} alt={animal.name} width={900} height={500} className="h-52 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{animal.name}</h3>
                <span className={`rounded-full border px-2 py-1 text-xs ${riskClasses[animal.dangerLevel]}`}>
                  {animal.dangerLevel}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{animal.status}</p>
              <p className="text-sm text-slate-400">Population: {animal.population.toLocaleString()}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="glass max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{selected.name}</h3>
              <button onClick={() => setSelected(null)} className="rounded-lg border border-white/20 px-3 py-1">
                Close
              </button>
            </div>
            <p className="mt-1 text-sm italic text-slate-400">{selected.scientificName}</p>
            <p className="mt-3 text-slate-200">{selected.description}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <p><strong>Habitat:</strong> {selected.habitat}</p>
              <p><strong>Diet:</strong> {selected.diet}</p>
              <p><strong>Lifespan:</strong> {selected.lifespan}</p>
              <p><strong>Status:</strong> {selected.status}</p>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              <strong>Threats:</strong> {selected.threats.join(", ")}
            </p>
            <p className="mt-2 text-sm text-slate-300">
              <strong>Conservation actions:</strong> {selected.conservationActions.join(", ")}
            </p>
            <div className="mt-5 rounded-xl border border-water/40 bg-water/10 p-3 text-sm">
              Recent tracking: Lat {selected.coordinates[0]}, Lng {selected.coordinates[1]} (simulated live feed).
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
