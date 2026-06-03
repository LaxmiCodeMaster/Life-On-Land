import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json()) as { imageName?: string };
  return NextResponse.json({
    animalName: "Likely Snow Leopard",
    species: "Panthera uncia",
    habitat: "High mountain ranges",
    conservationStatus: "Vulnerable",
    facts: `Identification based on ${body.imageName ?? "uploaded image"} with demo inference model.`
  });
}
