import { NextResponse } from "next/server";
import { identifyAnimalFromImageName } from "@/lib/ecocopilot";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { imageName?: string };
    const imageName = body.imageName?.trim() || "uploaded image";
    const result = identifyAnimalFromImageName(imageName);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Identification failed." }, { status: 500 });
  }
}
