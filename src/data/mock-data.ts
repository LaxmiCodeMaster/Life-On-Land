import { Animal, StatCard } from "@/types";

export const wildlifeStats: StatCard[] = [
  { label: "Total tracked animals", value: "12,480", color: "habitat" },
  { label: "Endangered species", value: "198", color: "endangered" },
  { label: "Protected forest area", value: "89,430 km2", color: "habitat" },
  { label: "Active GPS devices", value: "4,112", color: "water" },
  { label: "Incidents reported", value: "1,302", color: "danger" },
  { label: "Ecosystem health score", value: "82/100", color: "caution" }
];

export const animals: Animal[] = [
  {
    id: "snow-leopard",
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    image:
      "https://images.unsplash.com/photo-1611764461465-091a8d2f1a68?auto=format&fit=crop&w=1400&q=80",
    status: "Vulnerable",
    dangerLevel: "endangered",
    population: 3900,
    habitat: "High mountain ranges and alpine ecosystems",
    diet: "Ibex, blue sheep, marmots",
    lifespan: "10-12 years in the wild",
    threats: ["Poaching", "Habitat fragmentation", "Climate change"],
    conservationActions: ["Anti-poaching patrols", "Community stewardship"],
    coordinates: [27.7172, 85.324],
    description:
      "A flagship species for mountain conservation, known for elusive behavior and incredible adaptation to cold landscapes."
  },
  {
    id: "asian-elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1400&q=80",
    status: "Endangered",
    dangerLevel: "danger",
    population: 47000,
    habitat: "Tropical forests, grasslands, wetlands",
    diet: "Grass, bark, roots, fruits",
    lifespan: "48-60 years",
    threats: ["Human-wildlife conflict", "Loss of migration corridors"],
    conservationActions: ["Elephant corridors", "Early warning systems"],
    coordinates: [26.4499, 87.2718],
    description:
      "A keystone mega-herbivore critical for forest regeneration and seed dispersal across large habitats."
  },
  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1400&q=80",
    status: "Critically Endangered",
    dangerLevel: "water",
    population: 1000,
    habitat: "Large river ecosystems",
    diet: "Fish",
    lifespan: "40-60 years",
    threats: ["River pollution", "Dam construction"],
    conservationActions: ["River restoration", "Captive breeding"],
    coordinates: [28.3949, 84.124],
    description:
      "A specialized crocodilian species whose survival strongly indicates the health of freshwater ecosystems."
  }
];

export const regulations = [
  "Do not feed animals",
  "Do not disturb wildlife",
  "Stay on designated trails",
  "Respect conservation areas",
  "Follow park guidelines"
];
