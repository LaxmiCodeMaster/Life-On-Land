import { RiskLevel } from "@/types";

export const riskClasses: Record<RiskLevel, string> = {
  danger: "bg-danger/20 text-danger border-danger/50",
  endangered: "bg-endangered/20 text-endangered border-endangered/50",
  caution: "bg-caution/20 text-caution border-caution/50",
  habitat: "bg-habitat/20 text-habitat border-habitat/50",
  water: "bg-water/20 text-water border-water/50"
};

export const statusToRisk = (status: string): RiskLevel => {
  if (status.includes("Critically")) return "danger";
  if (status.includes("Endangered")) return "endangered";
  if (status.includes("Vulnerable")) return "caution";
  return "habitat";
};

/** Normalize a habitat word for singular/plural-insensitive comparison. */
function habitatWordStem(word: string): string {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!cleaned) return "";

  if (cleaned.endsWith("ies") && cleaned.length > 4) {
    return `${cleaned.slice(0, -3)}y`;
  }
  if (cleaned.endsWith("es") && cleaned.length > 4) {
    return cleaned.slice(0, -2);
  }
  if (cleaned.endsWith("s") && cleaned.length > 3) {
    return cleaned.slice(0, -1);
  }
  return cleaned;
}

/** Match habitat filters against free-text habitat descriptions. */
export function matchesHabitatFilter(animalHabitat: string, filter: string): boolean {
  if (!filter || filter === "All") return true;

  const filterStem = habitatWordStem(filter);
  const habitat = animalHabitat.toLowerCase();

  // Substring check (forest matches forests, river matches rivers).
  if (habitat.includes(filter.toLowerCase())) return true;

  // Word-level stem match (forests filter matches forest, mountain matches mountains).
  const habitatWords = habitat.split(/[\s,;/&-]+/).filter(Boolean);
  return habitatWords.some((word) => habitatWordStem(word) === filterStem);
}
