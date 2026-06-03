export type RiskLevel = "danger" | "endangered" | "caution" | "habitat" | "water";

export type Animal = {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  status: "Critically Endangered" | "Endangered" | "Vulnerable" | "Near Threatened";
  dangerLevel: RiskLevel;
  population: number;
  habitat: string;
  diet: string;
  lifespan: string;
  threats: string[];
  conservationActions: string[];
  coordinates: [number, number];
  description: string;
};

export type StatCard = {
  label: string;
  value: string;
  color: RiskLevel;
};

export type IncidentType =
  | "Illegal hunting"
  | "Injured animal"
  | "Forest fire"
  | "Habitat destruction"
  | "Human-wildlife conflict";
