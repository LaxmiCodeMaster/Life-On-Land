"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { animals } from "@/data/mock-data";
import { matchesHabitatFilter } from "@/lib/utils";

export default function EncyclopediaPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [habitat, setHabitat] = useState("All");

  const filtered = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSearch = animal.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === "All" || animal.status === status;
      const matchesHabitat = matchesHabitatFilter(animal.habitat, habitat);
      return matchesSearch && matchesStatus && matchesHabitat;
    });
  }, [search, status, habitat]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Animal Encyclopedia</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search animals"
          className="glass rounded-xl px-4 py-3 outline-none"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="glass rounded-xl px-4 py-3">
          <option>All</option>
          <option>Critically Endangered</option>
          <option>Endangered</option>
          <option>Vulnerable</option>
        </select>
        <select value={habitat} onChange={(e) => setHabitat(e.target.value)} className="glass rounded-xl px-4 py-3">
          <option>All</option>
          <option>mountain</option>
          <option>forest</option>
          <option>river</option>
        </select>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((animal) => (
          <article key={animal.id} className="glass rounded-2xl p-4">
            <Image src={animal.image} alt={animal.name} width={1200} height={500} className="h-52 w-full rounded-xl object-cover" />
            <h3 className="mt-3 text-xl font-semibold">{animal.name}</h3>
            <p className="text-sm italic text-slate-400">{animal.scientificName}</p>
            <p className="mt-2 text-sm"><strong>Status:</strong> {animal.status}</p>
            <p className="text-sm"><strong>Population:</strong> {animal.population.toLocaleString()}</p>
            <p className="text-sm"><strong>Habitat:</strong> {animal.habitat}</p>
            <p className="text-sm"><strong>Threats:</strong> {animal.threats.join(", ")}</p>
            <p className="text-sm"><strong>Protection measures:</strong> {animal.conservationActions.join(", ")}</p>
            <p className="mt-2 rounded-lg border border-water/40 bg-water/10 px-3 py-2 text-xs">
              Distribution map point: {animal.coordinates[0]}, {animal.coordinates[1]}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
