import { animals, regulations } from "@/data/mock-data";

type AnimalRecord = (typeof animals)[number];

function findAnimalInMessage(message: string): AnimalRecord | undefined {
  const lower = message.toLowerCase();
  return animals.find(
    (animal) =>
      lower.includes(animal.name.toLowerCase()) ||
      lower.includes(animal.id.replace(/-/g, " ")) ||
      lower.includes(animal.scientificName.toLowerCase())
  );
}

function formatAnimalProfile(animal: AnimalRecord): string {
  return [
    `**${animal.name}** (*${animal.scientificName}*)`,
    `- Conservation status: ${animal.status}`,
    `- Population estimate: ${animal.population.toLocaleString()}`,
    `- Habitat: ${animal.habitat}`,
    `- Diet: ${animal.diet}`,
    `- Lifespan: ${animal.lifespan}`,
    `- Threats: ${animal.threats.join(", ")}`,
    `- Protection measures: ${animal.conservationActions.join(", ")}`,
    `- About: ${animal.description}`
  ].join("\n");
}

const knowledgeTopics: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["sdg 15", "life on land", "sustainable development goal"],
    answer:
      "SDG 15 (Life on Land) focuses on protecting terrestrial ecosystems, halting biodiversity loss, restoring degraded land, and conserving forests, wetlands, and wildlife habitats. This platform supports that mission through tracking, education, and public reporting."
  },
  {
    keywords: ["endangered", "critically endangered", "vulnerable", "threatened"],
    answer:
      "Species are classified by IUCN Red List categories: Critically Endangered (highest risk), Endangered, Vulnerable, Near Threatened, and Least Concern. Our tracker page shows population trends and recovery programs for at-risk species."
  },
  {
    keywords: ["donate", "donation", "fund", "sponsor"],
    answer:
      "Donations support anti-poaching patrols, habitat restoration, wildlife rescue, and community conservation programs. Visit the Donate page for one-time, monthly, and sponsor-an-animal options with transparent funding goals."
  },
  {
    keywords: ["report", "incident", "poaching", "fire", "injured"],
    answer:
      "Use the Report Incident portal to submit illegal hunting, injured animals, forest fires, habitat destruction, or human-wildlife conflict. Include photos, GPS location, and a description so rangers can respond quickly."
  },
  {
    keywords: ["gps", "track", "tracking", "collar", "geofence", "boundary"],
    answer:
      "Our GPS dashboard simulates live collar data with movement history, heat maps, and boundary monitoring. If an animal leaves a protected zone, the system triggers geofence alerts for conservation teams."
  },
  {
    keywords: ["map", "ecosystem", "zone", "forest", "river", "danger zone"],
    answer:
      "The interactive ecosystem map uses color-coded zones: green (forests), blue (water), yellow (visitor caution), red (dangerous wildlife), and orange (endangered species regions). Use zoom and layer controls to explore."
  },
  {
    keywords: ["tourist", "visitor", "safety", "trail", "rules", "regulation"],
    answer: `Visitor safety guidelines:\n${regulations.map((r) => `• ${r}`).join("\n")}\nStay on marked trails and keep a safe distance from wildlife.`
  },
  {
    keywords: ["climate", "ecosystem", "biodiversity", "habitat"],
    answer:
      "Healthy ecosystems depend on biodiversity, connected habitats, and climate-resilient landscapes. Protecting keystone species, restoring corridors, and reducing pollution help entire food webs recover."
  },
  {
    keywords: ["student", "learn", "quiz", "education", "study"],
    answer:
      "The Student Learning Hub offers wildlife quizzes, educational modules, and certificate-style progress tracking. Great for classrooms and conservation volunteers."
  },
  {
    keywords: ["hello", "hi", "hey", "help", "what can you"],
    answer:
      "I'm EcoCopilot AI. I can explain animal species, conservation status, visitor safety, ecosystem maps, GPS tracking, incident reporting, donations, and SDG 15. Ask me anything about wildlife protection!"
  }
];

export function getEcoCopilotResponse(message: string): string {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please enter a question about wildlife, conservation, or ecosystem protection.";
  }

  const animal = findAnimalInMessage(trimmed);
  if (animal) {
    return formatAnimalProfile(animal);
  }

  const lower = trimmed.toLowerCase();
  for (const topic of knowledgeTopics) {
    if (topic.keywords.some((keyword) => lower.includes(keyword))) {
      return topic.answer;
    }
  }

  if (lower.includes("how many") && (lower.includes("animal") || lower.includes("species"))) {
    return `We currently profile ${animals.length} flagship species in the encyclopedia, with thousands tracked across protected areas. Featured species: ${animals.map((a) => a.name).join(", ")}.`;
  }

  if (lower.includes("list") && lower.includes("animal")) {
    return animals.map((a) => `• **${a.name}** — ${a.status}`).join("\n");
  }

  return [
    "I can help with wildlife facts, conservation guidance, and platform features.",
    `Try asking about: ${animals.map((a) => a.name).join(", ")}, endangered species, visitor safety, GPS tracking, or reporting incidents.`,
    "For live AI responses powered by OpenAI, add `OPENAI_API_KEY` to `.env.local` and restart the dev server."
  ].join("\n\n");
}

export function identifyAnimalFromImageName(imageName: string): {
  animalName: string;
  species: string;
  habitat: string;
  conservationStatus: string;
  facts: string;
} {
  const lower = imageName.toLowerCase();

  const matched =
    animals.find(
      (animal) =>
        lower.includes(animal.id) ||
        lower.includes(animal.name.toLowerCase().split(" ")[0]) ||
        (lower.includes("leopard") && animal.id === "snow-leopard") ||
        (lower.includes("elephant") && animal.id === "asian-elephant") ||
        (lower.includes("croc") && animal.id === "gharial") ||
        (lower.includes("gharial") && animal.id === "gharial")
    ) ?? animals[0];

  return {
    animalName: matched.name,
    species: matched.scientificName,
    habitat: matched.habitat,
    conservationStatus: matched.status,
    facts: `${matched.description} Threats include ${matched.threats.join(", ")}.`
  };
}
