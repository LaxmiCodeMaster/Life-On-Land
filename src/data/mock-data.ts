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
    id: "polar-bear",
    name: "Polar Bear",
    scientificName: "Ursus maritimus",
    image:
      "https://images.unsplash.com/photo-1530595467536-db675f1fbb0e?auto=format&fit=crop&w=1400&q=80",
    status: "Vulnerable",
    dangerLevel: "caution",
    population: 22000,
    habitat: "Arctic sea ice, coastal tundra, and frozen shorelines",
    diet: "Seals, fish, and occasional seabirds or vegetation",
    lifespan: "20-30 years in the wild",
    threats: ["Sea ice loss", "Climate change", "Pollution", "Human conflict"],
    conservationActions: ["Arctic habitat protection", "Climate action programs", "Conflict reduction near communities"],
    coordinates: [78.2232, 15.6267],
    description:
      "The polar bear is the world's largest land carnivore and a powerful symbol of the Arctic. Perfectly adapted to life on sea ice, it hunts seals and travels vast distances across frozen oceans. As warming temperatures shrink ice cover, polar bears are losing hunting grounds and coming closer to human settlements, making climate action essential to their survival."
  },
  {
    id: "one-horned-rhino",
    name: "One-Horned Rhino",
    scientificName: "Rhinoceros unicornis",
    image:
      "https://images.unsplash.com/photo-1564760055777-2f42b63e0f06?auto=format&fit=crop&w=1400&q=80",
    status: "Vulnerable",
    dangerLevel: "endangered",
    population: 4000,
    habitat: "Floodplain grasslands, wetlands, and riverine forests",
    diet: "Grasses, leaves, fruits, and aquatic plants",
    lifespan: "35-45 years",
    threats: ["Poaching for horn", "Habitat loss", "Flooding and invasive plants"],
    conservationActions: ["Anti-poaching units", "Habitat restoration", "Community-based conservation"],
    coordinates: [27.5291, 84.3542],
    description:
      "Also known as the Indian rhinoceros, this armored giant is recognized by its single horn and thick folded skin. Once widespread across the Indian subcontinent, it now survives mainly in protected parks in Nepal and India. Successful conservation has brought numbers back from the brink, but poaching and wetland destruction remain serious threats."
  },
  {
    id: "deer",
    name: "Deer",
    scientificName: "Cervidae (family)",
    image:
      "https://images.unsplash.com/photo-1484406566174-9cb61f6d1b4b?auto=format&fit=crop&w=1400&q=80",
    status: "Near Threatened",
    dangerLevel: "habitat",
    population: 35000000,
    habitat: "Forests, meadows, mountains, and woodland edges worldwide",
    diet: "Leaves, grass, bark, acorns, and shrubs",
    lifespan: "10-20 years depending on species",
    threats: ["Habitat fragmentation", "Road collisions", "Overhunting", "Predator imbalance"],
    conservationActions: ["Wildlife corridors", "Forest protection", "Sustainable hunting regulations"],
    coordinates: [45.3311, -110.5885],
    description:
      "Deer are graceful herbivores found on every continent except Antarctica. With keen senses and agile movement, they play a vital role in forest ecosystems as prey for large carnivores and as browsers that shape plant communities. Many deer species are stable, but forest loss and human development increasingly isolate herds and raise conflict with agriculture and traffic."
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
