import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = (await req.json()) as { message: string };
  const key = process.env.OPENAI_API_KEY;

  if (!key) {
    return NextResponse.json({
      answer:
        "EcoCopilot AI is in demo mode. Add OPENAI_API_KEY in environment variables for live intelligence."
    });
  }

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
            "You are EcoCopilot AI. Provide accurate wildlife conservation, tourism safety, and educational guidance."
        },
        { role: "user", content: message }
      ]
    })
  });

  if (!response.ok) {
    return NextResponse.json({ answer: "AI service temporarily unavailable." }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json({ answer: data.choices?.[0]?.message?.content ?? "No response." });
}
