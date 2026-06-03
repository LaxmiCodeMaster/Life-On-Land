import { NextResponse } from "next/server";
import { getEcoCopilotResponse } from "@/lib/ecocopilot";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { message?: string };
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ answer: "Please enter a message." }, { status: 400 });
    }

    const key = process.env.OPENAI_API_KEY;

    if (key) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are EcoCopilot AI for the Life on Land wildlife conservation platform. Provide accurate, concise wildlife conservation, tourism safety, and educational guidance. Use markdown when helpful."
              },
              { role: "user", content: message }
            ],
            max_tokens: 600
          })
        });

        if (response.ok) {
          const data = await response.json();
          const answer = data.choices?.[0]?.message?.content;
          if (answer) {
            return NextResponse.json({ answer, source: "openai" });
          }
        }
      } catch {
        // Fall through to local engine if OpenAI fails.
      }
    }

    return NextResponse.json({
      answer: getEcoCopilotResponse(message),
      source: "local"
    });
  } catch {
    return NextResponse.json(
      { answer: "EcoCopilot could not process your request. Please try again." },
      { status: 500 }
    );
  }
}
